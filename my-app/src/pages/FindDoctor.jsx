import React from "react";
import "../styles/FindDoctor.css";
import { useState, useEffect } from "react";
import { docList } from "../data/DoctorData";

export default function FindDoctor() {
  // List of all docs satisfing all the filters
  const [filteredList, setFilteredList] = useState(docList);

  //Selected Spec
  const [selectedSpec, setSelectedSpec] = useState("");

  const filterBySpec = (docList) => {
    // Avoid filter for empty string
    if (!selectedSpec) {
      return docList;
    }

    const filteredDocs = docList.filter(
      (doc) => doc.specialist.split(" ").indexOf(selectedSpec) !== -1
    );
    return filteredDocs;
  };

  const handleSpecChange = (event) => {
    setSelectedSpec(event.target.value);
  };

  useEffect(() => {
    var filteredData = filterBySpec(docList);

    setFilteredList(filteredData);
  }, [selectedSpec]);

  return (
    <div className="FindDoc">
      <div className="spec-filter">
        <div>Filter By Spec :</div>
        <select
          id="spec-input"
          value={selectedSpec}
          onChange={handleSpecChange}
        >
          <option value="">All</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Gynocologist">Gynocologist</option>
        </select>
      </div>
      <div id="doc-list">
        {filteredList.map((item, index) => (
          <div className="doc-item" key={index}>
            <div className="doc-name">{`Name:${item.doc_name}`}</div>
            <div className="doc-spec">{`Spec:${item.specialist}`}</div>
            <img className="doc-image" src={item.url} alt="doc-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
