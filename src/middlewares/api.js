export default function({dispatch}) {
    return next => action => {
        
        if(!action.payload.paction) {
           return next(action);
        }

        fetch(action.payload.url)
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            response.json().then(function(data) {
              const newAction = {...action,payload:data};
              dispatch(newAction);
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
      

    }
}