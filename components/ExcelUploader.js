"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

const ExcelUploader = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Ambil sheet pertama
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Konversi ke JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setExcelData(jsonData);

      console.log("Excel Data:", jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleUploadToDB = async () => {
    try {
      const res = await axios.post("http://31.97.107.84:3000/api/students/import", {
        data: excelData,   
      });
       
      console.log("Respon server:", res.data);
      alert("Data berhasil diimport!");
    } catch (err) {
      console.error(err);
      alert("Gagal import data.");
    }
  };
  

  return (
    <div className="container mt-4">
      <h3>Import Mahasiswa dari Excel</h3>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="form-control mb-3"
      />
      <button
        className="btn btn-success"
        onClick={handleUploadToDB}
        disabled={excelData.length === 0}
      >
        Upload ke Database
      </button>

      {/* Preview Data */}
      {excelData.length > 0 && (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              {Object.keys(excelData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExcelUploader;
