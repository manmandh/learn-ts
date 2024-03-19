//Factory Pattern
{
  type Shoe = {
      purpose: string;
  };

  class BalletFlat implements Shoe {
      purpose = 'dancing';
  }

  class Boot implements Shoe {
      purpose = 'woodcutting';
  }

  class Sneaker implements Shoe {
      purpose = 'walking';
  }

  let Shoe = {
      create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
          switch (type) {
              case 'balletFlat':
                  return new BalletFlat();
              case 'boot':
                  return new Boot();
              case 'sneaker':
                  return new Sneaker();
              default:
                  throw new Error('Invalid shoe type');
          }
      },
  };

  // Using the shoe factory to create different types of shoes
  const balletFlat = Shoe.create('balletFlat');
  console.log(balletFlat.purpose); // Output: dancing

  const boot = Shoe.create('boot');
  console.log(boot.purpose); // Output: woodcutting

  const sneaker = Shoe.create('sneaker');
  console.log(sneaker.purpose); // Output: walking
}

//Builder Pattern
{
  class RequestBuilder {
    private data: object | null = null;
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }

    setData(data: object): this {
        this.data = data;
        return this;
    }

    setURL(url: string): this {
        this.url = url;
        return this;
    }

    send() {
        // Here you would implement the logic to send the request using the specified method, URL, and data.
        // This could involve making an HTTP request using libraries like Axios or Fetch API.
        console.log('Sending request...');
        console.log('Method:', this.method);
        console.log('URL:', this.url);
        console.log('Data:', this.data);
        // Placeholder for actual implementation
    }
  }

  // Example usage
  new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send();
}
