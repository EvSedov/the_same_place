function serializeForm(formNode) {
  return new FormData(formNode);
};

function handleFormSubmit(event) {
  event.preventDefault();
  const data = serializeForm(feedbackForm);
  const formData = (Array.from(data.entries()));
  console.log(formData);
  return formData;
};

const feedbackForm = document.getElementById('form-feedback');
feedbackForm.addEventListener('submit', (e) => {
  handleFormSubmit(e);
  feedbackForm.reset();
});