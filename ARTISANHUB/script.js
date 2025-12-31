function registerArtisan() {
  //1. Get the values from the input fields
  const name = document.getElementById('artisanName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('artisanPhone').value;
  const specialty = document.getElementById('specialty').value;
  const photoSrc= document.getElementById('outputImage').src;

  if (name=== "" || email === "" || phone === "" || specialty === "") {
    alert("Please fill in all fields.");
        return;
    }}
  
    
     /*const artisanData = {
      fullName: name,
      //category: specialty,
      //imageFile: artisanPhoto

     };

     //Fill the success page with the data
     const viewName = "viewName";
     const viewSpcialty = "viewSpecialty";
     const viewPhone = "viewPhone";
     const viewBio = "viewBio";
     const viewPhoto = "viewPhoto";
     document.getElementById(viewName).innerText= name;

     document.getElementById(viewSpcialty).innerText= specialty;

     document.getElementById(viewPhone).innerText= "+234" + phone;

     document.getElementById(viewBio).innerText= bio;

     document.getElementById(viewPhoto).src=photoSrc;

     //THE SWIRCH: Hide form, show success
     document.querySelector(".container").style.display = "none"; //Hide the form

     document,getElementById("successPage").style.display ="block"; //Show success

*/
     //POST REGISTRATION PAGE
     function markAsVerified(){
      const card = document.querySelector('.verification-card');
      const title = document.getElementById('statusTitle');
      const icon = document.querySelector('verified-badge-icon');

        //UPDATE STYLES
        card.style.borderLeftColor = "#2ecc71";
        icon.style.color = "#1DA1F2";

      //UPDATE TEXT
      title.innerText = "Verified Artisan";
      title.style.color = "#2ecc71"
     }

     //UPDATE BUTTON
     document.querySelector('.btn-verify').innerText = "Complete Verification";


     //MODAL POP UP
     const modal = document.getElementById("verifyModal");

     //FUNCTION TO OPEN THE MODAL
     document.querySelector(".btn-verify").onclick = function()
     {
      modal.style.display = "flex";
     }

     //FUNCTION TO CLOSE THE MODAL
     function closeModal(){
      modal.style.display = "none";
     }

     //SHOW IMAGE PREVIEW AFTER SELECTING A FILE
     function showPreview(event){
      const reader = new FileReader();
      reader.onload = function(){
        const output = document.getElementById('preview');
        output.src = reader.rresult;
        output.style.display = 'block'
      }
      reader.readAsDataURL(event.target.files[0]);
     }

     //CLOSE MODAL IF USER CLICKS OUTSIDE OF IT
     window.onclick = function(event){
      if (event.target == modal)
        {closeModal()}
     }

     
     function startLoading(){
      const submitBtn = document.querySelector("#verifyModal .btn-verify");
      
      //CHANGE BUTTON TEXT AND STYLE
      if(submitBtn){
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>Submitting...';
      submitBtn.style.opacity = "0.7";
      submitBtn.style.cursor = "not allowed";
      submitBtn.disabled = true;

      //SIMULATE A NETWORK DELAY (e.g 2 seconds)
      setTimeout(() => {
        showSuccessMessage();
      }, 2000);
     } else{
      console.error("Could not find the submit button!");
     }
     }

     //SUCCESS ANIMATION
     function showSuccessMessage(){
      const modalContent = document.querySelector(".modal-content");

      //REPLACE THE INTERNAL HTML OF THE MODAL WITH A SUCCESS MESSAGE
      modalContent.innerHTML = `<div style="text-align: center; padding: 20px;">
      <div style="font-size: 50px; color: #2ecc71; margin-bottom: 20px;">
      <i class="fas fa-check-circle"></i>
      </div>
      <h3 style="color: #2c3e50;">Document Received!</h3>
      <p style="color: #7f8c8d;"> Our team is verifying your ID. This usually takes 24 hours. You'll receive a notification once your badge is active.</p>
      <button class="btn-verify" onclick="closeModal()" style="margin-top: 20px; padding: 10px 20px; background-color: #1DA1F2; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
      </div>
      ` ;
     }

     
    function openFilePicker() {
        // This forces the hidden input to click
        document.getElementById('videoUpload').click();
    }

    function handleFileSelect() {
        const fileInput = document.getElementById('videoUpload');
        if (fileInput.files.length > 0) {
            const name = fileInput.files[0].name;
            alert("Success! Video Selected: " + name);
           
            // This visually updates the UI so you know it worked
            const addBox = document.querySelector('.video-card');
            addBox.innerHTML = '<span style="font-size: 22px;">✅</span><span class="video-label">Selected</span>';
            addBox.style.borderColor = "#059669";
            addBox.style.color = "#059669";
        }
    }

    // Let's create a variable to represent the artisan's status
    // In a real app, your backend dev will provide this (e.g., 'verified' or 'pending')
    let artisanStatus = 'pending';

    function checkStatus() {
        const finishBtn = document.querySelector('.btn');
        if (artisanStatus === 'pending') {
            finishBtn.classList.add('btn-disabled');
            finishBtn.innerText = "Waiting for Admin Approval";
            finishBtn.onclick = function() {
                alert("Your account is still under review. You cannot mark jobs as finished yet.");
            };
        }
    }

    // Run this function when the page loads
    checkStatus();


    