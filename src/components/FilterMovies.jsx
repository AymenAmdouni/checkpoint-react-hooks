import React from 'react'
import { Form } from 'react-bootstrap';
import { TbAdjustmentsSearch } from 'react-icons/tb';
import ReactStars from 'react-stars';

const FilterMovies = ( {filterTitle , setFilterTitle , filterRate , setFilterRate}) => {

  return (
    <div className="d-flex align-center gap-2 mt-3">
      <Form.Label>
        <TbAdjustmentsSearch style={{ fontSize: "29px", margin: "2px 10px" }} />
      </Form.Label>
      <Form.Control
        style={{ width: "15rem" }}
        type="text"
        placeholder="filter movies by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <p style={{ margin: "2px 10px" }}>By Rate </p>
      <ReactStars count={5} size={30} color2={"#ffd700"} half={false} value={filterRate} onChange={(rate)=> setFilterRate(rate)} />
    </div>
  );
}

export default FilterMovies