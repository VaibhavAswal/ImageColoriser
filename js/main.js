deepai.setApiKey('833f7d33-4707-496b-abde-ecc578f5ddc4');
$('#colorise').bind("click",function() 
{ 


    var imgVal = $('#myFile').val(); 
    if(imgVal=='') 
    { 
        alert("Please Select Any photo"); 


    } 
   else
     {
    animate();
    (async function () {
        var resp = await deepai.callStandardApi('colorizer', {
            image: document.getElementById('myFile'),
        });
        document.getElementById('imageb').scrollIntoView();
        console.log(resp);
        document.getElementById("imageb").src = resp.output_url;
        document.getElementById("gallerybottom").style.display = "flex";
        
        })()

    }
}); 

function download() {
        location.href = document.getElementById("imageb").src;
}

function animate() {
            /* This is all just to start and stop the animation. Technically, the animation itself only uses CSS. */

            activateLoadAnim(false), false;

            document.querySelector("a").addEventListener("click", function () { activateLoadAnim(true) }, false);
        
            function activateLoadAnim(undo) {
                document.querySelector("#loading").classList.remove("animate");
                document.getElementById("colorise").blur();
                document.querySelector("#loading").classList.add("animate"); document.querySelector("#toast").classList.remove("popped");
                setTimeout(stopAnim, 6500);
                if (undo) {
                    document.querySelector("#toast .big").textContent = 'Alright.';
                    document.querySelector("#toast .info").textContent = 'We undid that thing.';
                    document.querySelector("#toast a").style.display = "none";
                }
                else {
                    document.querySelector("#toast .big").textContent = 'Sucess...';
                    document.querySelector("#toast .info").textContent = 'Image Colorised';
                    document.querySelector("#toast a").style.display = "project by: vaibhav";
                }
            }
        
            function stopAnim() {
                document.querySelector("#loading").classList.remove("animate");
                document.querySelector("#toast").classList.add("popped");
                setTimeout(cleanup, 6000);
            }
        
            function cleanup() {
                document.querySelector("#toast").classList.remove("popped");
            }
}




