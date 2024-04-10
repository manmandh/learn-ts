{
  type User = { /* Define the structure of User */ };
  type Location = { /* Define the structure of Location */ };
  type Request = { entity: 'user', data: User } | { entity: 'location', data: Location };

  // client.ts
  async function get<R extends Request>(entity: R['entity']): Promise<R['data']> {
    let res = await fetch(`/api/${entity}`);
    let json = await res.json();
    if (!json) {
      throw new ReferenceError('Empty response');
    }
    return json;
  }

  // app.ts
  async function startApp() {
    let user = await get<{ entity: 'user', data: User }>('user'); // User
    console.log(user); // Assuming you want to log the user data
  }
}
