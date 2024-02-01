import React, { useEffect } from "react";

const UseEffectApi = () => {
  const getUsers = async () => {
    const response = fetch();
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <>
      <h2>List of GitHub Users</h2>
      <div className="container">
        <div className="row text-center">
          <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 textLeft">MERN DEVELOPER</h4>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white">
                    <div className="d-flex flex-column">
                      <span className="articles">articles</span>
                      <span className="number1">38</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">followers</span>
                      <span className="number2">500</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="rating">rating</span>
                      <span className="number3">8.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
