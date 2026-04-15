import { useState } from "react";

/**
 * Collects the title and description for a new skill tree.
 */
function SkillTreeForm({ onSubmit }) {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await onSubmit(formValues);
      setFormValues({
        title: "",
        description: "",
      });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="panel form-panel" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Tree title</span>
        <input
          name="title"
          onChange={updateField}
          placeholder="Frontend Developer Path"
          required
          type="text"
          value={formValues.title}
        />
      </label>

      <label className="form-field">
        <span>Description</span>
        <textarea
          name="description"
          onChange={updateField}
          placeholder="A step-by-step plan for learning the frontend stack."
          rows="4"
          value={formValues.description}
        />
      </label>

      {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

      <button className="button" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Creating..." : "Create Skill Tree"}
      </button>
    </form>
  );
}

export default SkillTreeForm;
