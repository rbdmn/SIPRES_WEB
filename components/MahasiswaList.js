"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MahasiswaList = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    axios
      .get("http://31.97.107.84:3000/api/students")
      .then((res) => {
        setMahasiswa(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Daftar Mahasiswa</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">NIM</th>
            <th scope="col">Nama</th>
            <th scope="col">Jurusan</th>
            <th scope="col">Angkatan</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs) => (
            <tr key={mhs._id}>
              <td>{mhs.nim}</td>
              <td>{mhs.name}</td>
              <td>{mhs.program}</td>
              <td>{mhs.angkatan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MahasiswaList;
