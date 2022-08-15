import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(
  courseName,
  credits,
  AT,
  FE,
  Pr,
  PA,
  Qz,
  RP,
  ME,
  PA2,
  PRE,
  T10,
  Grading
) {
  return {
    courseName,
    credits,
    AT,
    FE,
    Pr,
    PA,
    Qz,
    RP,
    ME,
    PA2,
    PRE,
    T10,
    Grading,
  };
}

const StudentResult = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [gradeList, setGrade] = useState([]);
  let userObject = jwt_decode(localStorage.getItem("student"));
  console.log(userObject);

  useEffect(() => {
    const fetchGrade = async () => {
      const res = await axios.get(
        `https://uni-aa-page.herokuapp.com/transcript/transcriptEmail/${userObject.email}`
      );
      setGrade(res.data.grades);
    };
    fetchGrade();
  }, []);

  const rows = gradeList.map((v) => {
    let temp = [v.course].concat(v.grade.split(","));
    return createData(...temp);
  });

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ mx: "auto", mt: "50px", width: "100%", color: "#000248" }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Course Name</b>
              </TableCell>
              <TableCell align="center">
                <b>Credits</b>
              </TableCell>
              <TableCell align="center">
                <b>AT</b>
              </TableCell>
              <TableCell align="center">
                <b>FE</b>
              </TableCell>
              <TableCell align="center">
                <b>Pr</b>
              </TableCell>
              <TableCell align="center">
                <b>PA</b>
              </TableCell>
              <TableCell align="center">
                <b>Qz</b>
              </TableCell>
              <TableCell align="center">
                <b>RP</b>
              </TableCell>
              <TableCell align="center">
                <b>ME</b>
              </TableCell>
              <TableCell align="center">
                <b>PA2</b>
              </TableCell>
              <TableCell align="center">
                <b>PRE</b>
              </TableCell>
              <TableCell align="center">
                <b>T10</b>
              </TableCell>
              <TableCell align="center">
                <b>Grading</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.courseName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.courseName}
                </TableCell>
                <TableCell align="center">{row.credits}</TableCell>
                <TableCell align="center">
                  {row.AT === "null" ? "" : row.AT}
                </TableCell>
                <TableCell align="center">
                  {row.FE === "null" ? "" : row.FE}
                </TableCell>
                <TableCell align="center">
                  {row.Pr === "null" ? "" : row.Pr}
                </TableCell>
                <TableCell align="center">
                  {row.PA === "null" ? "" : row.PA}
                </TableCell>
                <TableCell align="center">
                  {row.Qz === "null" ? "" : row.Qz}
                </TableCell>
                <TableCell align="center">
                  {row.RP === "null" ? "" : row.RP}
                </TableCell>
                <TableCell align="center">
                  {row.ME === "null" ? "" : row.ME}
                </TableCell>
                <TableCell align="center">
                  {row.PA2 === "null" ? "" : row.PA2}
                </TableCell>
                <TableCell align="center">
                  {row.PRE === "null" ? "" : row.PRE}
                </TableCell>
                <TableCell align="center">
                  {row.T10 === "null" ? "" : row.T10}
                </TableCell>
                <TableCell align="center">A+</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default StudentResult;
