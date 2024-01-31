import React, { useState } from "react";
import { FormGroup, Alert, Label, Row, Col } from "reactstrap";
import axios from "axios";
import { baseUrl13 } from '../../../redux/baseUrl';
import "./style.css";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const RequestBook = ({ propertyId }) => {
    const [formData, setFormData] = useState({
        Property: propertyId,
        name: "",
        email: "",
        mobile_Number: "",
        date: "",
    });

    const [alertData, setAlertData] = useState({
        showAlert: false,
        alertText: null,
        alertType: null
    });

    const validateEmail = (email) => {
        // A simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateMobileNumber = (mobileNumber) => {
        // Ensure mobile number has exactly 11 digits
        return mobileNumber.length === 11 && !isNaN(mobileNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, mobile_Number } = formData;

        // Validate email and mobile number
        if (!validateEmail(email)) {
            setAlertData({
                showAlert: true,
                alertText: "Please enter a valid email address.",
                alertType: "danger"
            });
            return;
        }

        if (!validateMobileNumber(mobile_Number)) {
            setAlertData({
                showAlert: true,
                alertText: "Mobile number must be exactly 11 digits and contain only numeric characters.",
                alertType: "danger"
            });
            return;
        }

        try {
            // Make a POST request to the API
            const response = await axios.post(baseUrl13, formData);

            if (response.status === 201) {
                // Display success message
                setAlertData({
                    showAlert: true,
                    alertText: "Submitted Successfully",
                    alertType: "success"
                });

                // Reset the form data
                setFormData({
                    Property: propertyId,
                    name: "",
                    email: "",
                    mobile_Number: "",
                    date: "",
                });

                // Hide the success message after 2 seconds
                setTimeout(() => {
                    setAlertData({
                        showAlert: false
                    });
                }, 2000);
            }
        } catch (error) {
            console.log(error.response);

            // Display error message if submission fails
            setAlertData({
                showAlert: true,
                alertText: "Submission Failed. Please try again.",
                alertType: "danger"
            });
        }
    };


    return (
        <div className="contact">
            <div className="container p-5">
                <div>
                    <Alert style={{background:"none", border:"none", textAlign:"center"}} isOpen={alertData.showAlert} color={alertData.alertType}>
                        {alertData.alertText}
                    </Alert>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h2 style={{ textAlign: "center", fontSize: "25px", fontWeight: "600" }}>
                                Schedule Viewing
                            </h2>
                            <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "400" }}>Please provide all the necessary information.</p>
                        </div>
                        <FormGroup>
                            <input
                                type="hidden"
                                name="Property"
                                value={propertyId}
                                disabled
                            />
                        </FormGroup>
                        <FormGroup className="input-box">
                            <Label htmlFor="date" className="lbl">
                                Select Date <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                type="date"
                                name="date"
                                className="input"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                required
                            />
                        </FormGroup>
                        <FormGroup className="input-box">
                            <Label className="lbl">
                                Select Time <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <Row>
                                <Col>
                                <FormCheckInput
                                value="9:0-10:0"
                                />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="input-box">
                            <Label htmlFor="name" className="lbl">
                                Full Name <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                type="text"
                                name="name"
                                className="input"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="email" className="lbl">
                                email Address <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="input-box">
                            <Label htmlFor="mobile_Number" className="lbl">
                                Phone Number <b style={{ color: "red", fontSize: "14px" }}>*</b>
                            </Label>
                            <input
                                className="input"
                                placeholder="Enter phone number"
                                type="text"
                                name="mobile_Number"
                                value={formData.mobile_Number}
                                onChange={(e) => setFormData({ ...formData, mobile_Number: e.target.value })}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col md="6" style={{ marginBottom: "5%" }}>
                                    <button type="submit" className="button30">Submit</button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestBook;