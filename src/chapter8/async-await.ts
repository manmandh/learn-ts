{
  function getLocation(){
    //set x, y
  }
  async function getUser() {
    try {
        let user = await getUser();
        let location = await getLocation();
        console.info('got location', location);
    } catch(error) {
        console.error(error);
    } finally {
        console.info('done getting location');
    }
  }
}
