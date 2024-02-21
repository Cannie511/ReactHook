import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../customize/fetch";
const FreeApi = () => {
  // const [dataUni, setDataUni] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [isErr, setIsErr] = useState(false);
  const {
    data: dataUni,
    loading,
    isErr,
  } = useFetch("http://universities.hipolabs.com/search?country=Viet+Nam");
  //component did mount
  //
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
          {isErr === false &&
            loading === false &&
            dataUni &&
            dataUni.length > 0 &&
            dataUni.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <a href={item.web_pages} rel="noreferrer" target="_blank">
                      {item.web_pages}
                    </a>
                  </td>
                  <td>{item.country}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
          {isErr === true && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                Something wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default FreeApi;
