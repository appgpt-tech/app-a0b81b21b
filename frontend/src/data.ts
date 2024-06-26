//Source code generated by AppGPT (www.appgpt.tech)
let data: any = {
  defaultData: {
    Users: [
      {
        username: 'username 1',
        email: 'email 1',
        password: 'password 1',
        role: 'role 1',
        id: 15,
      },
      {
        username: 'username 2',
        email: 'email 2',
        password: 'password 2',
        role: 'role 2',
        id: 91,
      },
      {
        username: 'username 3',
        email: 'email 3',
        password: 'password 3',
        role: 'role 3',
        id: 4,
      },
      {
        username: 'username 4',
        email: 'email 4',
        password: 'password 4',
        role: 'role 4',
        id: 82,
      },
      {
        username: 'username 5',
        email: 'email 5',
        password: 'password 5',
        role: 'role 5',
        id: 76,
      },
    ],
    Vendors: [
      {
        companyName: 'companyName 1',
        contactName: 'contactName 1',
        email: 'email 1',
        password: 'password 1',
        id: 81,
      },
      {
        companyName: 'companyName 2',
        contactName: 'contactName 2',
        email: 'email 2',
        password: 'password 2',
        id: 55,
      },
      {
        companyName: 'companyName 3',
        contactName: 'contactName 3',
        email: 'email 3',
        password: 'password 3',
        id: 23,
      },
      {
        companyName: 'companyName 4',
        contactName: 'contactName 4',
        email: 'email 4',
        password: 'password 4',
        id: 25,
      },
      {
        companyName: 'companyName 5',
        contactName: 'contactName 5',
        email: 'email 5',
        password: 'password 5',
        id: 42,
      },
    ],
    Customers: [
      {
        customerName: 'customerName 1',
        email: 'email 1',
        password: 'password 1',
        billingAddress: 'billingAddress 1',
        shippingAddress: 'shippingAddress 1',
        country: 'country 1',
        phone: 'phone 1',
        id: 54,
      },
      {
        customerName: 'customerName 2',
        email: 'email 2',
        password: 'password 2',
        billingAddress: 'billingAddress 2',
        shippingAddress: 'shippingAddress 2',
        country: 'country 2',
        phone: 'phone 2',
        id: 83,
      },
      {
        customerName: 'customerName 3',
        email: 'email 3',
        password: 'password 3',
        billingAddress: 'billingAddress 3',
        shippingAddress: 'shippingAddress 3',
        country: 'country 3',
        phone: 'phone 3',
        id: 78,
      },
      {
        customerName: 'customerName 4',
        email: 'email 4',
        password: 'password 4',
        billingAddress: 'billingAddress 4',
        shippingAddress: 'shippingAddress 4',
        country: 'country 4',
        phone: 'phone 4',
        id: 17,
      },
      {
        customerName: 'customerName 5',
        email: 'email 5',
        password: 'password 5',
        billingAddress: 'billingAddress 5',
        shippingAddress: 'shippingAddress 5',
        country: 'country 5',
        phone: 'phone 5',
        id: 33,
      },
    ],
    Inventory: [
      { product: 1, quantity: 1, lowStockThreshold: 1, id: 41 },
      { product: 2, quantity: 2, lowStockThreshold: 2, id: 30 },
      { product: 3, quantity: 3, lowStockThreshold: 3, id: 63 },
      { product: 4, quantity: 4, lowStockThreshold: 4, id: 88 },
      { product: 5, quantity: 5, lowStockThreshold: 5, id: 17 },
    ],
    Products: [
      {
        productName: 'productName 1',
        vendor: 1,
        price: 0.12,
        weight: 0.35,
        description: 'description 1',
        thumbnail: 'thumbnail 1',
        image: 'image 1',
        category: 1,
        creationDate: '2023-05-20T07:05:17.667Z',
        stock: 1,
        id: 39,
      },
      {
        productName: 'productName 2',
        vendor: 2,
        price: 0.52,
        weight: 0.41,
        description: 'description 2',
        thumbnail: 'thumbnail 2',
        image: 'image 2',
        category: 2,
        creationDate: '2024-03-12T22:12:24.084Z',
        stock: 2,
        id: 65,
      },
      {
        productName: 'productName 3',
        vendor: 3,
        price: 0.97,
        weight: 0.08,
        description: 'description 3',
        thumbnail: 'thumbnail 3',
        image: 'image 3',
        category: 3,
        creationDate: '2023-09-18T20:08:09.570Z',
        stock: 3,
        id: 70,
      },
      {
        productName: 'productName 4',
        vendor: 4,
        price: 0.26,
        weight: 0.3,
        description: 'description 4',
        thumbnail: 'thumbnail 4',
        image: 'image 4',
        category: 4,
        creationDate: '2023-09-16T13:41:44.577Z',
        stock: 4,
        id: 15,
      },
      {
        productName: 'productName 5',
        vendor: 5,
        price: 0.99,
        weight: 0.32,
        description: 'description 5',
        thumbnail: 'thumbnail 5',
        image: 'image 5',
        category: 5,
        creationDate: '2024-10-16T19:21:40.820Z',
        stock: 5,
        id: 57,
      },
    ],
    ProductCategories: [
      { category: 'category 1', id: 53 },
      { category: 'category 2', id: 68 },
      { category: 'category 3', id: 71 },
      { category: 'category 4', id: 98 },
      { category: 'category 5', id: 78 },
    ],
    Discounts: [
      {
        product: 1,
        discountType: 'discountType 1',
        description: 'description 1',
        discountAmount: 0.94,
        discountPercent: 0.22,
        id: 8,
      },
      {
        product: 2,
        discountType: 'discountType 2',
        description: 'description 2',
        discountAmount: 0.81,
        discountPercent: 0.41,
        id: 82,
      },
      {
        product: 3,
        discountType: 'discountType 3',
        description: 'description 3',
        discountAmount: 0.85,
        discountPercent: 0.27,
        id: 23,
      },
      {
        product: 4,
        discountType: 'discountType 4',
        description: 'description 4',
        discountAmount: 0.29,
        discountPercent: 0.94,
        id: 3,
      },
      {
        product: 5,
        discountType: 'discountType 5',
        description: 'description 5',
        discountAmount: 0.68,
        discountPercent: 0.25,
        id: 43,
      },
    ],
    ShoppingCart: [
      { customer: 1, product: 1, priceAtPurchase: 0.52, quantity: 1, id: 9 },
      { customer: 2, product: 2, priceAtPurchase: 0.04, quantity: 2, id: 47 },
      { customer: 3, product: 3, priceAtPurchase: 0.14, quantity: 3, id: 25 },
      { customer: 4, product: 4, priceAtPurchase: 0.45, quantity: 4, id: 56 },
      { customer: 5, product: 5, priceAtPurchase: 0.18, quantity: 5, id: 24 },
    ],
    Orders: [
      {
        orderNumber: 'orderNumber 1',
        customer: 1,
        totalAmount: 0.92,
        vat: 1,
        totalAmountWithVat: 0.89,
        shippingCost: 0.12,
        shippingAddress: 'shippingAddress 1',
        orderAddress: 'orderAddress 1',
        orderEmail: 'orderEmail 1',
        orderDate: '2024-09-19T13:05:12.264Z',
        orderStatus: 'orderStatus 1',
        trackingNo: 'trackingNo 1',
        id: 69,
      },
      {
        orderNumber: 'orderNumber 2',
        customer: 2,
        totalAmount: 0.72,
        vat: 0.43,
        totalAmountWithVat: 0.46,
        shippingCost: 0.86,
        shippingAddress: 'shippingAddress 2',
        orderAddress: 'orderAddress 2',
        orderEmail: 'orderEmail 2',
        orderDate: '2024-11-24T21:20:08.437Z',
        orderStatus: 'orderStatus 2',
        trackingNo: 'trackingNo 2',
        id: 63,
      },
      {
        orderNumber: 'orderNumber 3',
        customer: 3,
        totalAmount: 0.99,
        vat: 0.39,
        totalAmountWithVat: 0.9,
        shippingCost: 0.47,
        shippingAddress: 'shippingAddress 3',
        orderAddress: 'orderAddress 3',
        orderEmail: 'orderEmail 3',
        orderDate: '2024-06-14T07:19:42.636Z',
        orderStatus: 'orderStatus 3',
        trackingNo: 'trackingNo 3',
        id: 7,
      },
      {
        orderNumber: 'orderNumber 4',
        customer: 4,
        totalAmount: 0.34,
        vat: 0.01,
        totalAmountWithVat: 0.56,
        shippingCost: 0.33,
        shippingAddress: 'shippingAddress 4',
        orderAddress: 'orderAddress 4',
        orderEmail: 'orderEmail 4',
        orderDate: '2025-04-17T16:05:45.734Z',
        orderStatus: 'orderStatus 4',
        trackingNo: 'trackingNo 4',
        id: 61,
      },
      {
        orderNumber: 'orderNumber 5',
        customer: 5,
        totalAmount: 0.71,
        vat: 0.73,
        totalAmountWithVat: 0.19,
        shippingCost: 0.07,
        shippingAddress: 'shippingAddress 5',
        orderAddress: 'orderAddress 5',
        orderEmail: 'orderEmail 5',
        orderDate: '2024-05-03T03:27:24.520Z',
        orderStatus: 'orderStatus 5',
        trackingNo: 'trackingNo 5',
        id: 92,
      },
    ],
    OrderDetails: [
      { orderNumber: 1, line: 1, product: 1, price: 0.18, quantity: 1, id: 51 },
      { orderNumber: 2, line: 2, product: 2, price: 0.77, quantity: 2, id: 80 },
      { orderNumber: 3, line: 3, product: 3, price: 0.61, quantity: 3, id: 85 },
      { orderNumber: 4, line: 4, product: 4, price: 0.3, quantity: 4, id: 34 },
      { orderNumber: 5, line: 5, product: 5, price: 0.76, quantity: 5, id: 89 },
    ],
    Payments: [
      {
        orderNumber: 1,
        amount: 0.43,
        paymentMethod: 'paymentMethod 1',
        paymentDate: '2024-06-27T02:34:58.012Z',
        paymentStatus: 'paymentStatus 1',
        id: 58,
      },
      {
        orderNumber: 2,
        amount: 0.34,
        paymentMethod: 'paymentMethod 2',
        paymentDate: '2024-07-07T17:35:44.939Z',
        paymentStatus: 'paymentStatus 2',
        id: 59,
      },
      {
        orderNumber: 3,
        amount: 0.73,
        paymentMethod: 'paymentMethod 3',
        paymentDate: '2023-10-31T09:20:36.052Z',
        paymentStatus: 'paymentStatus 3',
        id: 53,
      },
      {
        orderNumber: 4,
        amount: 0.8,
        paymentMethod: 'paymentMethod 4',
        paymentDate: '2024-10-19T20:13:52.262Z',
        paymentStatus: 'paymentStatus 4',
        id: 49,
      },
      {
        orderNumber: 5,
        amount: 0.96,
        paymentMethod: 'paymentMethod 5',
        paymentDate: '2023-09-17T09:58:10.833Z',
        paymentStatus: 'paymentStatus 5',
        id: 76,
      },
    ],
    Reviews: [
      {
        product: 1,
        customer: 1,
        vendor: 1,
        rating: 1,
        reviewDetails: 'reviewDetails 1',
        date: '2024-12-10T20:14:55.219Z',
        id: 24,
      },
      {
        product: 2,
        customer: 2,
        vendor: 2,
        rating: 2,
        reviewDetails: 'reviewDetails 2',
        date: '2023-06-12T22:00:25.839Z',
        id: 68,
      },
      {
        product: 3,
        customer: 3,
        vendor: 3,
        rating: 3,
        reviewDetails: 'reviewDetails 3',
        date: '2025-01-05T16:05:25.896Z',
        id: 3,
      },
      {
        product: 4,
        customer: 4,
        vendor: 4,
        rating: 4,
        reviewDetails: 'reviewDetails 4',
        date: '2024-07-13T05:20:02.117Z',
        id: 60,
      },
      {
        product: 5,
        customer: 5,
        vendor: 5,
        rating: 5,
        reviewDetails: 'reviewDetails 5',
        date: '2024-05-27T16:53:44.941Z',
        id: 40,
      },
    ],
    SupportTickets: [
      {
        user: 1,
        customer: 1,
        description: 'description 1',
        status: 'status 1',
        creationDate: '2024-11-10T02:30:38.383Z',
        resolutionDate: '2023-05-25T07:57:19.891Z',
        id: 93,
      },
      {
        user: 2,
        customer: 2,
        description: 'description 2',
        status: 'status 2',
        creationDate: '2024-11-08T03:20:56.547Z',
        resolutionDate: '2023-07-11T10:41:38.235Z',
        id: 96,
      },
      {
        user: 3,
        customer: 3,
        description: 'description 3',
        status: 'status 3',
        creationDate: '2024-01-23T16:48:11.640Z',
        resolutionDate: '2024-11-30T06:34:34.754Z',
        id: 66,
      },
      {
        user: 4,
        customer: 4,
        description: 'description 4',
        status: 'status 4',
        creationDate: '2023-10-02T15:28:26.434Z',
        resolutionDate: '2023-12-01T19:30:02.963Z',
        id: 56,
      },
      {
        user: 5,
        customer: 5,
        description: 'description 5',
        status: 'status 5',
        creationDate: '2024-07-25T03:23:03.521Z',
        resolutionDate: '2025-03-25T17:32:43.633Z',
        id: 99,
      },
    ],
  },
};
export default data;
