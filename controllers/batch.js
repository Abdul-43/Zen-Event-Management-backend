import Batch from "../models/batch.model.js";

import Student from "../models/student.js";
import Answer from "../models/answer.js";
export const batchCreate = async (req, res) => {
  try {
    const batchExists = await Batch.findOne({ batchName: req.body.batchName });
    if (!batchExists) {
      const batch = new Batch(req.body);
      await batch.save();
      res.json({ message: "Batch created" });
    } else {
      res.json({ message: "This batch name already exists" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const giveBatch = async (req, res) => {
  try {
    const batchData = await Batch.find({}, { batchName: 1 });
    res.status(200).json(batchData);
  } catch (err) {
    console.log(err);
  }
};

export const studentBatches = async (req, res) => {
  try {
    const batch = await Batch.findOne({ batchName: req.body.batchName });
    if (batch) {
      const students = await Student.find({ batchId: batch._id });
      res.json({ details: students });
    } else {
      res.json({ message: "Something went wrong" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const studentDetails = async (req, res) => {
  try {
    console.log("first");
    let student = await Student.findById(req.params.userId);
    res.json({ data: student });
  } catch (error) {
    console.log(error);
    res.json({ message: "Something went wrong" });
  }
};

export const assignCapstone = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.userId, {
      $push: { capstone: req.body },
    });
    if (student) {
      res.json({ message: "Event updated" });
    } else {
      res.json({ message: "Student not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCapstone = async (req, res) => {
  try {
    const student = await Student.findById(req.headers.userid);
    res.json({ data: student.capstone });
  } catch (error) {
    console.log(error);
  }
};

export const postLink = async (req, res) => {
  try {
    const answer = new Answer({
      student: req.body.userId,
      fesc:req.body.fesc,
      besc:req.body.besc,
      fedc:req.body.fedc,
      bedc:req.body.bedc,
    });
    await answer.save();
    res.json({ message: "Answer submitted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error submitting answer" });
  }
};
