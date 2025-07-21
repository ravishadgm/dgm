"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MessageBox } from '@/app/lib/MessageBox';
import { handleError } from '@/app/lib/HandelError';
import DataFormExcel from './DataFormExcel';

const DataForm = () => {
    const [input, setInput] = useState({

        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        contactNo: "",
        DOB: "",
        grNo: "",
        gender: "",
        rollNo: "",
        standard: "",
        division: "",
        medium: "",
        results: [{
            final_result: {}
        }],
    })
    const [validation, setValidation] = useState({});
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)

    const regexPatterns = {
        nameRegx: /^[A-Za-z0-9]+$/,
        emailRegx: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        contactRegx: /^[0-9]{10}$/,
        divisionRegx: /^[A-Za-z]{1}/,
    };

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     const schoolName = localStorage.getItem("school_name");
    //     const schoolId = localStorage.getItem("school_id");

    //     setAuthData({ token, schoolName, schoolId });
    // }, []);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 2000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setValidation({ ...validation, [e.target.name]: false });
    };

    const setErrorAndValidate = (message, field) => {
        setIsError(message);
        setValidation({ ...validation, [field]: true });
    }

    // console.log(input.rollNo, 'roall nomber')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!regexPatterns.nameRegx.test(input.firstName)) {
            return setErrorAndValidate("FirstName is required!", "firstName");
        }

        if (!regexPatterns.nameRegx.test(input.middleName)) {
            return setErrorAndValidate("MiddleName is required!", "middleName");
        }

        if (!regexPatterns.nameRegx.test(input.lastName)) {
            return setErrorAndValidate("LastName is required!", "lastName");
        }


        if (!regexPatterns.emailRegx.test(input.email)) {
            return setErrorAndValidate("Email is required!", "email");
        }

        if (!regexPatterns.contactRegx.test(input.contactNo)) {
            return setErrorAndValidate("Mobile No. is required!", "contactNo");
        }


        if (!input.DOB) {
            return setErrorAndValidate("DOB is required!", "DOB");
        }
        if (!input.grNo) {
            return setErrorAndValidate("GR_NO is required!", "grNo");
        }
        if (!input.gender) {
            return setErrorAndValidate("gender is required!", "gender");
        }


        if (!input.rollNo) {
            return setErrorAndValidate("RollNo is required!", "rollNo");
        }

        if (!input.standard) {
            return setErrorAndValidate("Standard is required!", "standard");
        }

        if (!regexPatterns.divisionRegx.test(input.division)) {
            return setErrorAndValidate("Devision is required!", "division");
        }

        if (!input.medium) {
            return setErrorAndValidate("Medium is required!", "medium");
        }

        // if (!input.results) {
        //     return setErrorAndValidate("results is required!", "results");
        // }

        await fetchData();
        setInput({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            contactNo: "",
            DOB: "",
            grNo: "",
            gender: "",
            rollNo: "",
            standard: "",
            division: "",
            medium: "",
            results: [{
                final_result: {}
            }],
        });

        setValidation({});
        setMessage("Form submitted successfully!");
    }

    const fetchData = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);
        const data = {
            "first_name": input.firstName,
            "middel_name": input.middleName,
            "last_name": input.lastName,
            "gr_number": input.grNo,
            "email": input.email,
            "mobile": input.contactNo,
            "date_of_birth": input.DOB,
            "address": "surat",
            "roll_number": input.rollNo,
            "standard": input.standard,
            "division": input.division,
            "medium": input.medium,
            "results": input.results,

        }
        try {
            const response = await axios.post("/api/client/add-student", data,
                {
                    headers: {
                        Authorization: localStorage?.getItem('token'),
                    }
                }
            );


            if (response.status === 200) {
                MessageBox('success', response.data.message)
                setMessage("Data added successfully!");

            } else {
                MessageBox('success', response.data.message)
                setMessage("Failed to add data!");
            }
        } catch (error) {
            handleError("error", error)

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-4 ">
            <div>
                <DataFormExcel />
                <fieldset className="border border-gray-400 p-4 rounded-lg w-full bg-[#f3f3f3]">
                    <legend className="text-md font-semibold px-2">Student Details</legend>
                    <div className='mx-8 my-4'>
                        {message && <p className="text-xs text-red-500 mt-2 ">{message}</p>}
                        <div className="flex w-full items-center gap-2 ">
                            <div className="w-full flex flex-col gap-1 relative">
                                <label className="text-left text-sm pl-1 font-semibold"
                                >First Name :</label>
                                <input type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.firstName}
                                    onChange={handleInput} />
                                {validation.firstName && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}

                            </div>
                            <div className="w-full flex flex-col gap-1 relative">
                                <label className="text-left text-sm pl-1 font-semibold">Middle Name :</label>
                                <input type="text"
                                    name="middleName"
                                    placeholder="Middle name"
                                    className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.middleName}
                                    onChange={handleInput} />
                                {validation.middleName && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-1 relative">
                                <label className="text-left text-sm pl-1 font-semibold ">Last Name :</label>
                                <input type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.lastName}
                                    onChange={handleInput} />
                                {validation.lastName && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="flex w-full items-center gap-10 mt-3 ">
                            <div className="w-full flex flex-col gap-1 relative">
                                <label className="text-left text-sm pl-1 font-semibold ">Email :</label>
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.email}
                                    onChange={handleInput} />
                                {validation.email && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-1 relative">
                                <label className="text-left text-sm pl-1 font-semibold ">Mobile No :</label>
                                <input type="number"
                                    name="contactNo"
                                    placeholder="Mobile no"
                                    className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.contactNo}
                                    onChange={handleInput} />
                                {validation.contactNo && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-10 mt-3">
                            <div className="w-full flex flex-col gap-1  relative">
                                <label className="text-left text-sm pl-1 font-semibold " >DOB :</label>
                                <input type="date" name="DOB" placeholder="DOB" className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.DOB}
                                    onChange={handleInput} />
                                {validation.DOB && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-1  relative">
                                <label className="text-left text-sm pl-1 font-semibold ">GR No :</label>
                                <input type="number" name="grNo" placeholder="GR No" className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.grNo}
                                    onChange={handleInput} />
                                {validation.grNo && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="flex w-full items-center gap-10 mt-3">
                            <div className="w-full flex flex-col gap-1 relative">
                                <label className="text-left text-sm pl-1 font-semibold">Gender :</label>
                                <select
                                    name="gender"
                                    className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.gender}
                                    onChange={handleInput}
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                {validation.gender && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>

                            <div className="w-full flex flex-col gap-1  relative">
                                <label className="text-left text-sm pl-1 font-semibold ">Roll No :</label>
                                <input type="number" name="rollNo" placeholder="Roll No." className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.rollNo}
                                    onChange={handleInput} />
                                {validation.rollNo && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="flex w-full items-center gap-10 mt-3">
                            <div className="w-full flex flex-col gap-1  relative">
                                <label className="text-left text-sm pl-1 font-semibold">Standard :</label>
                                <input type="number" name="standard" placeholder="Standard" className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.standard}
                                    onChange={handleInput} />
                                {validation.standard && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>

                            <div className="w-full flex flex-col gap-1  relative">
                                <label className="text-left text-sm pl-1 font-semibold ">Division :</label>
                                <input type="text" name="division" placeholder="division" className="p-2 border border-[#cdcdcd] rounded-md text-xs w-full hover:border-green-600"
                                    value={input.division}
                                    onChange={handleInput} />
                                {validation.division && (
                                    <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                        {isError}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-10 mt-3">
                            <div className="w-full flex flex-col gap-1  relative">
                                <label className="text-left text-sm pl-1 font-semibold">Meduim:</label>
                                <div className="flex items-center gap-2">
                                    <select
                                        name="medium"
                                        className="p-2 border border-[#cdcdcd] rounded-md w-full text-xs hover:border-green-600"
                                        value={input.medium}
                                        onChange={handleInput}
                                    >
                                        <option value="" disabled>Select Medium</option>
                                        <option value="English">English</option>
                                        <option value="Gujarati">Gujarati</option>
                                    </select>
                                    {validation.medium && (
                                        <div className="text-[10px] text-red-600 block absolute left-1 bottom-[-15px]">
                                            {isError}
                                        </div>
                                    )}

                                    <button className="p-2 border border-[#cdcdcd] rounded-md text-xs bg-green-800 text-white font-semibold cursor-pointer w-24"
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}>
                                        {isSubmitting ? "Add..." : "Add"}
                                    </button>
                                    {validation.apiError && (
                                        <div className="text-[10px] text-red-600 block absolute">
                                            {validation.apiError}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div >
        </div >
    )
}

export default DataForm;