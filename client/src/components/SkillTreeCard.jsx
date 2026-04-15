/**
 * Displays a summary card for one skill tree.
 */
function SkillTreeCard({ tree }) {
  return (
    <article className="panel tree-card">
      <div className="tree-card__header">
        <h3>{tree.title}</h3>
        <span className="tree-card__badge">Draft</span>
      </div>
      <p>{tree.description || "No description yet."}</p>
    </article>
  );
}

export default SkillTreeCard;
