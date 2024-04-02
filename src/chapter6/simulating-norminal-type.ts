{
  // Define unique symbols
  const companyIDBrand = Symbol();
  const orderIDBrand = Symbol();
  const userIDBrand = Symbol();

  // Define branded types
  type CompanyID = string & { readonly brand: typeof companyIDBrand };
  type OrderID = string & { readonly brand: typeof orderIDBrand };
  type UserID = string & { readonly brand: typeof userIDBrand };
  type ID = CompanyID | OrderID | UserID;

  // Constructor functions for creating branded types
  function CompanyID(id: string) {
    return id as CompanyID;
  }

  function OrderID(id: string) {
    return id as OrderID;
  }

  function UserID(id: string) {
    return id as UserID;
  }

  // Function accepting only UserID
  function queryForUser(id: UserID) {
    // Implementation
  }

  // Create instances
  let companyId = CompanyID('8a6076cf');
  let orderId = OrderID('9994acc1');
  let userId = UserID('d21b1dbf');

  // Usage
  queryForUser(userId); // OK
}
