import React from 'react';

const Blogs = () => {
  return (
    <div className="text-center">
      <h2>1.Difference between authorization and authentication</h2>
      <h4>#.Authentication</h4>
      <p>
        Authentication is the process of identifying a user to provide access to
        a system. <br /> In this, the user or client and server are verified.{' '}
        <br />
        It is usually performed before the authorization.
      </p>
      <h4>#.Authorization</h4>
      <p>
        Authorization is the process of giving permission to access the
        resources. <br />
        In this, it is verified that if the user is allowed through the defined
        policies and rules. <br />
        It is usually done once the user is successfully authenticated.
      </p>
      <h2>2.Why are you using firebase?</h2>
      <p>
        Firebase by Google can be used for the following: Firebase manages all
        data real-time in the database. So, the exchange of data to and fro from
        the database is easy and quick. Hence, if you are looking to develop
        mobile apps such as live streaming, chat messaging, etc., you can use
        Firebase.
      </p>
      <h2>
        What other services does firebase provide other than authentication
      </h2>
      <p>
        Cloud Firestore Real-time updates, powerful queries and automatic
        scaling,Storage Store & retrieve user generated content,Hosting Machine
        Learning Solve common problems in your apps with machine earning
        Functions DEploy WeD apps in seconds Extend and connect Firebase
        features,Realtime Database Store and sync data in real time etc.
      </p>
    </div>
  );
};

export default Blogs;
