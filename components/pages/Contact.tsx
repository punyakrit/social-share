import '../Contactstyles.css';

const Contact = () => {
  return (
    <div className="bg-dark-gray-900 min-h-screen flex items-center justify-center">
      <div className="container ">
        <div className="screen bg-gray-800 rounded-lg shadow-lg shadow-drop-2-center">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close bg-red-600"></div>
              <div className="screen-header-button maximize bg-yellow-400"></div>
              <div className="screen-header-button minimize bg-green-500"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis bg-gray-600"></div>
              <div className="screen-header-ellipsis bg-gray-600"></div>
              <div className="screen-header-ellipsis bg-gray-600"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left ">
              <div className="app-title">
                <span className="text-purple-400 font-bold">CONTACT</span>
                <span>&nbsp;</span>
                <span className="text-purple-400 font-bold">US</span>
              </div>
              <div className="map">
                {/* Embedded Google Maps here */}
                {/* Replace this comment with your Google Maps embed code */}
              </div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input className="app-form-control bg-gray-700 text-white" placeholder="NAME" value="" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control bg-gray-700 text-white" placeholder="EMAIL" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control bg-gray-700 text-gray-300" placeholder="CONTACT NO" />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control bg-gray-700 text-gray-300" placeholder="MESSAGE" />
                </div>
                <div className="app-form-group grid grid-cols-2 gap-4 buttons hover:text-blue-400">
                  <button className="app-form-button text-white font-semibold hover:text-blue-400">CANCEL</button>
                  <button className="app-form-button text-white font-semibold hover:text-blue-400">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
