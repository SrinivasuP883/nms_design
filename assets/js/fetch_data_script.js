let imu;
let btr_value;


setInterval(() => {
            fetch('assets/js/fetch_data.js')
                .then(response => response.json())  // Parse the JSON data
                .then(data => {
                    // Log the entire JSON object to the console
                    console.log('Fetched Data:', data);

                    // Log individual values to the console
                    console.log('Azimuth:', data.Azimuth);
                    console.log('Elevation:', data.Elevation);
                    console.log('Polarization:', data.Polarization);
                    console.log('imu health:', data.imu_health);
                console.log('btr_status:', data.btr_status);
                
                imu = data.imu_health;
                btr_value = data.btr_status;
                
                document.getElementById('roll_value').textContent = data.Azimuth;
                    document.getElementById('pitch_value').textContent = data.Elevation;
                    document.getElementById('yaw_value').textContent = data.Polarization;
                    
                })
                .catch(error => {
                    console.error('Error fetching JSON:', error);
                });
        }, 500); // 1000ms = 1 second





function updateButtonColor() {
            const button = document.getElementById('imu_health');
            
            if (imu === "0") {
                button.style.backgroundColor = 'green';  // Set green color when imu is 0
            } else  if (imu === "1") {
                button.style.backgroundColor = 'red';  // Set green color when imu is 0
            }else {
                button.style.backgroundColor = 'gray';    // Set red color when imu is not 0
            }

               }
        // Call the function to apply the initial color based on imu value
        updateButtonColor();
        setInterval(updateButtonColor, 500);  // Call the function every 1 second



 function updateCardColor() {
            const card = document.getElementById('btr_status');
            
           if (btr_value === "0") {
                card.style.backgroundColor = 'green';  // Green if btr_value is 0
                card.style.height = '78.6px';  // Height when status is Active
                card.textContent = "Status: Active";  // Change text based on the value
            } else  if (btr_value === "1") {
                card.style.backgroundColor = 'red';   // Red if btr_value is 1
                card.style.height = '78.6px';  // Height remains the same when status is Inactive
                card.textContent = "Status: Inactive";  // Change text based on the value
            }
        }

        // Call updateCardColor every 1 second (1000 milliseconds)
        setInterval(updateCardColor, 1000);  //