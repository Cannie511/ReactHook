import { useState, useEffect } from "react";
import axios from "axios";

const FreeApi = () => {
  const [dataUni, setDataUni] = useState([]);
  //component did mount
  useEffect(async () => {
    let res = await axios.get(
      "http://universities.hipolabs.com/search?country=Viet+Nam"
    );
    let data = res && res.data ? res.data : [];
    setDataUni(data);
    console.log("check uni data: ", res);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Trường</th>
            <th>Website</th>
            <th>Quốc gia</th>
          </tr>
        </thead>
        <tbody>
          {dataUni &&
            dataUni.length > 0 &&
            dataUni.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <a href={item.web_pages} target="_blank">{item.web_pages}</a>
                  </td>
                  <td>{item.country}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default FreeApi;
