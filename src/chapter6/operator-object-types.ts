//1.The keying-in operator

// Define types
type APIResponse = {
  user: {
    userId: string
    friendList: FriendList
  }
}

type FriendList = {
  count: number
  friends: {
    firstName: string
    lastName: string
  }[]
}

// Function to fetch API response
function getAPIResponse(): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
    // Example implementation fetching API response
    fetch('https://api.imgbb.com/1/upload?key=12bf5830553fd071836060cc5f97b48')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch API');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });

}

// Function to render friend list
function renderFriendList(friendList: FriendList): void {

}

// Usage
async function app() {
  let response = await getAPIResponse();
  renderFriendList(response.user.friendList);
}

app();

// The key of operator
{
  type Get = {
    <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(o: O, k1: K1, k2: K2): O[K1][K2];
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2]>(o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3];
  };

  let get: Get = (object: any, ...keys: string[]) => {
      let result = object;
      keys.forEach(k => result = result[k]);
      return result;
  };

  interface ActivityLog {
      lastEvent: Date;
      events: {
          id: string;
          timestamp: Date;
          type: 'Read' | 'Write';
      }[];
  }

  let activityLog: ActivityLog = {
      lastEvent: new Date(),
      events: [
          { id: '1', timestamp: new Date(), type: 'Read' },
          { id: '2', timestamp: new Date(), type: 'Write' }
      ]
  };

  const eventType = get(activityLog, 'events', 0, 'type'); // 'Read' | 'Write'
  const lastEvent = get(activityLog, 'lastEvent'); // Date
  // const bad = get(activityLog, 'bad'); // This would produce an error since 'bad' is not a valid key
}
