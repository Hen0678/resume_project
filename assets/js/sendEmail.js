function sendMail(contactForm) {
    emailjs.send("service_on2nwtn", "template_b2ozke9", {
        "name": contactForm.fullname.value,
        "emailAddress": contactForm.emailaddress.value,
        "project_request":contactForm.projectsummary.value
        

      }) 
      .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("Failed", error);
        });
}

