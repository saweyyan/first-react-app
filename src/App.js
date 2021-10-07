import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout, { Layout2, x } from './comp/Layout';
import Text from './comp/Text';

function App() {
  const [flag, setFlag] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const updateTheState = () => {
    setFlag(!flag);
  };

  function renderScreen() {
    if (currentPage === 1) return <HomePage />;
    else if (currentPage === 2) return <GroupsPage />;
    else return <ProfilePage />;
  }

  // const arr = [1, 2, 3, 4, 5];
  console.log('test ');
  return (
    <div>
      <Text />
      {flag && <p>the condion is true</p>}
      <Layout onChange={setCurrentPage} currentPage={currentPage} key1="key">
        {/* <p>this exported variable {x}</p> */}

        {renderScreen()}
        {/* {flag ? <HomePage /> : <ProfilePage />} */}
        <button
          onClick={() => {
            setFlag(!flag);
          }}
        >
          update the state
        </button>
        {/* <button onClick={updateTheState}>update the state</button> */}
      </Layout>
    </div>
  );
}

function HomePage({ key1, key2 }) {
  return (
    <div>
      <p>this home page</p>
    </div>
  );
}
function ProfilePage({ key1, key2 }) {
  return (
    <div>
      <p>this profile page</p>
    </div>
  );
}
function GroupsPage({ key1, key2 }) {
  return (
    <div>
      <p>this groups page</p>
    </div>
  );
}

function GroupItem(props) {
  console.log('group item props ', props);
  return <p>group {props.prop1}</p>;
}

export default App;
