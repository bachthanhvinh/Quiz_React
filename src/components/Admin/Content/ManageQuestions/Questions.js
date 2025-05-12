import { useState } from "react";
import Select from "react-select";
import {
  BsPatchMinus,
  BsPatchMinusFill,
  BsPatchPlus,
  BsPatchPlusFill,
  BsPlusSquareFill,
} from "react-icons/bs";

import { RiImageAddLine } from "react-icons/ri";
import "./ManageQuestions.scss";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
function Questions() {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div className="container container-question">
        <div className="mt-3">
          <h5>Manage Questions </h5>
        </div>

        <form>
          <div className="row">
            <div className="col-6">
              <div className=" col-11 form-group">
                <label>Select Quiz:</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
              <label className="mt-3">Add Questions:</label>

              <div className="col-11 form-floating mb-4 ">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="description"
                />
                <label htmlFor="floatingInput">Description</label>
              </div>
              <div className="row upload-image_question ">
                <div className=" col-4 ">
                  <label htmlFor="input-file" className="icon-image-file">
                    <RiImageAddLine />
                  </label>
                  <input id="input-file" type="file" hidden />
                  <span className="uploadfile">0 file this uploaded</span>
                </div>
                <div className="btn-question col-8">
                  <button className="add-question ">
                    <BsPatchPlusFill />
                  </button>
                  <button className="delete-question">
                    <BsPatchMinusFill />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <div className="question-answer">
                <input type="checkbox" className="question-answer_checkbox" />
                <div className="col-9 form-floating  ">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="description"
                  />
                  <label htmlFor="floatingInput">Answer</label>
                </div>
                <div className="btn-answer ">
                  <button className="add-answer ">
                    <FaSquarePlus />
                  </button>
                  <button className="delete-answer">
                    <FaSquareMinus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Questions;
