import { useState, useEffect } from 'react';
const Fetch = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('127.0.0.1:3000/api')
      .then((res) => {
        return res;
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      
      {/* {photos.map((photo) => (
        <div>{photo.message}</div>
      ))} */}
    </div>
  );
};
export default Fetch;