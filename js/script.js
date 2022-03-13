var contactForm = $("#contact-form");

$(function() {
    // what we do titles add bold class and center
    $('.w-title').addClass("fw-bold text-center");

    contactForm.on("submit", function(e) {
        e.preventDefault();
        let formValid = validateContactForm();
        if (formValid) {
            const name = $("input.name").val();

            alert(`Thank you ${name}, your message has been received`);
            clearForm();
        }
    });

    toggleWhatWeDo();
});
// function

//  function to toggle what we do
function toggleWhatWeDo() {
  $(".service").on("click", function() {
      if ($(".service-details", this).is(":visible")) {
          $(".service-details", this).hide();
          $(".service-card", this).fadeIn("slow");
      } else {
          $(".service-details", this).fadeIn("slow");
          $(".service-card", this).hide();
      }
  });
}
