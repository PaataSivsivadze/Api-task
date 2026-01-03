const button = document.getElementById('show');
const usersContainer = document.getElementById('usersContainer');

button.addEventListener('click', async() => {
    usersContainer.innerHTML = '';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
                    throw new Error('სერვერთან დაკავშირება ვერ მოხერხდა: ' + response.status);
        }
        const users = await response.json();
        users.forEach(user => {
            const userdiv = document.createElement('div');
            userdiv.classList.add('user');
            userdiv.innerHTML = `
                <strong>${user.name}</strong>
                <br>Username:${user.username}<br>
                <br>Email:${user.email}<br>
                <br>Street:${user.address.street}<br>
                <br>Suite:${user.address.suite}<br>
                <br>City:${user.address.city}<br>
                <br>Zipcode:${user.address.zipcode}<br>
                <br>geo-Lat:${user.address.geo.lat}<br>
                <br>geo-Lng:${user.address.geo.lng}<br>
                <br>Phone:${user.phone}<br>
                <br>Website:${user.website}<br>
                <br>Company name:${user.company.name}<br>
                <br>Company catchPhrase:${user.company.catchPhrase}<br>
                <br>Company bs:${user.company.bs}<br>`;
                
                

            usersContainer.appendChild(userdiv);
        });
            
        }
    catch (error) {
                usersContainer.innerHTML = `<p style="color: red;">შეშვება: ${error.message}</p>`;
    }
});