

    const token = localStorage.getItem('token');
    console.log("token," ,token);

   
      let apiUrl = 'https://stagingb.bittez.io/'
         export const IsAuthenticated = async (setIsAuthenticated, token) => {
        await fetch(`${apiUrl}react-routes-validation?token=${token}`)
          .then((result) => {
            result.json().then((resp) => {
              console.log("validation-validation", resp)
              setIsAuthenticated(resp.result)
            });
          })
      }