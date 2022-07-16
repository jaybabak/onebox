db.createUser({
  user: 'onebox',
  pwd: 'onebox',
  roles: [
    {
      role: 'readWrite',
      db: 'onebox',
    },
  ],
});
