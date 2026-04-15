import { useEffect, useState } from "react";

import SkillTreeCard from "../components/SkillTreeCard.jsx";
import SkillTreeForm from "../components/SkillTreeForm.jsx";
import { createTree, getTrees } from "../data/api.js";

/**
 * Shows the current core feature: create and view skill trees.
 */
function HomePage() {
  const [trees, setTrees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadTrees() {
      try {
        const { trees: savedTrees } = await getTrees();
        setTrees(savedTrees);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadTrees();
  }, []);

  async function handleCreateTree(formValues) {
    const { tree } = await createTree(formValues);
    setTrees((currentTrees) => [tree, ...currentTrees]);
  }

  return (
    <section className="dashboard-layout">
      <div className="page-heading">
        <p className="eyebrow">Code Review Milestone</p>
        <h1>Create and view skill trees.</h1>
        <p>This version focuses on one clean feature for instructor review.</p>
      </div>

      <div className="dashboard-grid">
        <SkillTreeForm onSubmit={handleCreateTree} />
        <section className="tree-list">
          <div className="tree-list__header">
            <h2>Saved Trees</h2>
            <span>{trees.length} total</span>
          </div>
          {isLoading ? <p className="status-message">Loading skill trees...</p> : null}
          {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
          {!isLoading && trees.length === 0 ? (
            <div className="panel empty-state">
              <h3>No trees yet</h3>
              <p>Create your first learning path using the form on this page.</p>
            </div>
          ) : null}
          <div className="tree-list__items">
            {trees.map((tree) => (
              <SkillTreeCard key={tree.id} tree={tree} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default HomePage;
