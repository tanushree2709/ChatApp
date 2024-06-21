export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Anie",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Anee",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Anie",
    _id: "1",
  },

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Anee",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Anie",
    },
    _id: "1",
  },

  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Anee",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "hello how are you?",
    _id: "asdfghjjkgff",
    sender: {
      _id: "user._id",
      name: "XYZ",
    },
    chat: "chatId",
    createdAt: "2024-04-10T10:41:30.6302",
  },
  {
    attachments: [
      {
        public_id: "xyz2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "asdfghjjkgff2",
    sender: {
      _id: "xyz",
      name: "XYZ 2",
    },
    chat: "chatId",
    createdAt: "2024-04-10T10:41:30.6302",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Anie",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "anie",
      friends: 21,
      groups: 6,
    },
    {
      name: "Anee",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "anee",
      friends: 20,
      groups: 5,
    },
  ],

  chats: [
    {
      name: "Anie Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Anie",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },

    {
      name: "Anee Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Anie",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "How are you?",
      _id: "sfnsdjkfsdnfkjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Anie ",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "I have sent you a file",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "sfnsdjkfsdnfkdddjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Anee",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
