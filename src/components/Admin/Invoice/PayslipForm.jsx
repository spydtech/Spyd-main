// import React, { useState } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// const PayslipForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     // Personal Details
//     name: 'Ravada Hemanth Sai Phani Kumar',
//     employeeId: 'SDT-A122',
//     designation: 'Talent Acquisition',
//     department: 'HR Department',
//     location: 'Hyderabad',
//     effectiveWorkDays: '31',
//     lop: '0.0',
    
//     // Bank Details
//     bankName: 'STATE BANK OF INDIA',
//     bankAccount: '42991992800',
//     panNumber: 'HDRPR3759G',
//     uanNumber: '102371372179',
    
//     // Month and Year
//     month: 'July',
//     year: '2026',
    
//     // Earnings
//     basic: 17500,
//     hra: 8750,
//     medicalAllowance: 1250,
//     conveyanceAllowance: 1600,
//     specialAllowance: 5900,
//     performanceBonus: 4030,
    
//     // Deductions
//     pfEmployee: 3600,
//     pt: 200
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleNumberChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: parseFloat(value) || 0
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     try {
//       const response = await axios.post('/api/payslip/generate', formData, {
//         responseType: 'blob'
//       });
      
//       // Create download link
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `payslip_${formData.employeeId}_${formData.month}_${formData.year}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
      
//       toast.success('Payslip generated successfully!');
//     } catch (error) {
//       console.error('Error generating payslip:', error);
//       toast.error('Failed to generate payslip. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       name: '',
//       employeeId: '',
//       designation: '',
//       department: '',
//       location: 'Hyderabad',
//       effectiveWorkDays: '31',
//       lop: '0.0',
//       bankName: 'STATE BANK OF INDIA',
//       bankAccount: '',
//       panNumber: '',
//       uanNumber: '',
//       month: 'July',
//       year: '2026',
//       basic: 0,
//       hra: 0,
//       medicalAllowance: 0,
//       conveyanceAllowance: 0,
//       specialAllowance: 0,
//       performanceBonus: 0,
//       pfEmployee: 0,
//       pt: 0
//     });
//     toast.success('Form reset successfully!');
//   };

//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({length: 10}, (_, i) => (currentYear - 5 + i).toString());

//   return (
//     <>
//       <Toaster position="top-right" />
//       <form onSubmit={handleSubmit}>
//         <div className="section-title">Employee Information</div>
        
//         <div className="form-row">
//           <div className="form-group">
//             <label>Full Name *</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Employee ID *</label>
//             <input
//               type="text"
//               name="employeeId"
//               value={formData.employeeId}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Designation *</label>
//             <input
//               type="text"
//               name="designation"
//               value={formData.designation}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Department *</label>
//             <input
//               type="text"
//               name="department"
//               value={formData.department}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Location *</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Effective Work Days</label>
//             <input
//               type="text"
//               name="effectiveWorkDays"
//               value={formData.effectiveWorkDays}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>LOP</label>
//             <input
//               type="text"
//               name="lop"
//               value={formData.lop}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>PAN Number</label>
//             <input
//               type="text"
//               name="panNumber"
//               value={formData.panNumber}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="section-title">Bank Details</div>
        
//         <div className="form-row">
//           <div className="form-group">
//             <label>Bank Name</label>
//             <input
//               type="text"
//               name="bankName"
//               value={formData.bankName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Bank Account No.</label>
//             <input
//               type="text"
//               name="bankAccount"
//               value={formData.bankAccount}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>UAN Number</label>
//             <input
//               type="text"
//               name="uanNumber"
//               value={formData.uanNumber}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Month *</label>
//             <select
//               name="month"
//               value={formData.month}
//               onChange={handleChange}
//               required
//             >
//               {months.map(month => (
//                 <option key={month} value={month}>{month}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Year *</label>
//             <select
//               name="year"
//               value={formData.year}
//               onChange={handleChange}
//               required
//             >
//               {years.map(year => (
//                 <option key={year} value={year}>{year}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="section-title">Earnings</div>
        
//         <div className="form-row">
//           <div className="form-group">
//             <label>Basic *</label>
//             <input
//               type="number"
//               name="basic"
//               value={formData.basic}
//               onChange={handleNumberChange}
//               required
//               step="0.01"
//             />
//           </div>
//           <div className="form-group">
//             <label>HRA</label>
//             <input
//               type="number"
//               name="hra"
//               value={formData.hra}
//               onChange={handleNumberChange}
//               step="0.01"
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Medical Allowance</label>
//             <input
//               type="number"
//               name="medicalAllowance"
//               value={formData.medicalAllowance}
//               onChange={handleNumberChange}
//               step="0.01"
//             />
//           </div>
//           <div className="form-group">
//             <label>Conveyance Allowance</label>
//             <input
//               type="number"
//               name="conveyanceAllowance"
//               value={formData.conveyanceAllowance}
//               onChange={handleNumberChange}
//               step="0.01"
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Special Allowance</label>
//             <input
//               type="number"
//               name="specialAllowance"
//               value={formData.specialAllowance}
//               onChange={handleNumberChange}
//               step="0.01"
//             />
//           </div>
//           <div className="form-group">
//             <label>Performance Bonus</label>
//             <input
//               type="number"
//               name="performanceBonus"
//               value={formData.performanceBonus}
//               onChange={handleNumberChange}
//               step="0.01"
//             />
//           </div>
//         </div>

//         <div className="section-title">Deductions</div>
        
//         <div className="form-row">
//           <div className="form-group">
//             <label>PF Employee</label>
//             <input
//               type="number"
//               name="pfEmployee"
//               value={formData.pfEmployee}
//               onChange={handleNumberChange}
//               step="0.01"
//             />
//           </div>
//           <div className="form-group">
//             <label>PT</label>
//             <input
//               type="number"
//               name="pt"
//               value={formData.pt}
//               onChange={handleNumberChange}
//               step="0.01"
//             />
//           </div>
//         </div>

//         <div className="button-group">
//           <button 
//             type="submit" 
//             className="btn btn-primary"
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <span className="loading">⚪</span> Generating...
//               </>
//             ) : (
//               'Generate Payslip'
//             )}
//           </button>
//           <button 
//             type="button" 
//             className="btn btn-secondary"
//             onClick={handleReset}
//           >
//             Reset Form
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default PayslipForm;





// import React, { useState } from 'react';
// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
// import { encode } from 'base64-arraybuffer';

// const PayslipGenerator = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: 'Ravindra Desai, Sai Bhargavi Kumar',
//     employeeId: 'SDT-A122',
//     designation: 'Talent Acquisition',
//     department: 'HR Department',
//     location: 'Hyderabad',
//     effectiveWorkDays: '31',
//     lop: '0.0',
//     bankName: 'STATE BANK OF INDIA',
//     bankAccount: '42991992800',
//     panNumber: 'HDRPR3759G',
//     uanNumber: '102371372179',
//     month: 'July',
//     year: '2026',
//     basic: 17500,
//     hra: 8750,
//     medicalAllowance: 1250,
//     conveyanceAllowance: 1600,
//     specialAllowance: 5900,
//     performanceBonus: 4030,
//     pfEmployee: 3600,
//     pt: 200
//   });

//   const formatCurrency = (amount) => {
//     return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   };

//   const numberToWords = (num) => {
//     const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//     const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
//     if (num === 0) return 'Zero';
    
//     const numStr = Math.floor(num).toString();
//     const numLength = numStr.length;
    
//     if (numLength > 5) return 'Number too large';
    
//     let words = '';
    
//     if (numLength === 5 || numLength === 4) {
//       const thousands = parseInt(numStr.slice(0, -3));
//       if (thousands > 0) {
//         words += (thousands < 20 ? ones[thousands] : tens[Math.floor(thousands / 10)] + ' ' + ones[thousands % 10]) + ' Thousand ';
//       }
//       const remainder = parseInt(numStr.slice(-3));
//       if (remainder > 0) {
//         words += (remainder < 100 ? '' : ones[Math.floor(remainder / 100)] + ' Hundred ') + 
//                  (remainder % 100 > 0 ? (remainder % 100 < 20 ? ones[remainder % 100] : tens[Math.floor((remainder % 100) / 10)] + ' ' + ones[(remainder % 100) % 10]) : '');
//       }
//     } else if (numLength === 3) {
//       words += ones[Math.floor(num / 100)] + ' Hundred ';
//       const remainder = num % 100;
//       if (remainder > 0) {
//         words += (remainder < 20 ? ones[remainder] : tens[Math.floor(remainder / 10)] + ' ' + ones[remainder % 10]);
//       }
//     } else if (numLength === 2) {
//       words += (num < 20 ? ones[num] : tens[Math.floor(num / 10)] + ' ' + ones[num % 10]);
//     } else {
//       words += ones[num];
//     }
    
//     return words.trim();
//   };

//   const generatePDF = async () => {
//     setLoading(true);
    
//     try {
//       const pdfDoc = await PDFDocument.create();
//       const page = pdfDoc.addPage([595.28, 841.89]);
//       const { width, height } = page.getSize();
      
//       const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
//       // Helper function to draw text
//       const drawText = (text, x, y, size = 10, fontType = font, color = rgb(0, 0, 0)) => {
//         page.drawText(text, {
//           x,
//           y,
//           size,
//           font: fontType,
//           color,
//         });
//       };

//       let yPos = height - 40;

//       // ===== LOGO SECTION =====
//       try {
//         // Load logo image from public folder
//         const logoResponse = await fetch('C:\\Users\\SPY D\\OneDrive\\Desktop\\Spyd-main\\Spyd-main\\public\\3 (1).png');
//         if (logoResponse.ok) {
//           const logoImageBytes = await logoResponse.arrayBuffer();
//           const logoImage = await pdfDoc.embedPng(logoImageBytes);
          
//           // Draw the logo
//           page.drawImage(logoImage, {
//             x: 50,
//             y: yPos - 50,
//             width: 60,
//             height: 60,
//           });
          
//           // Company Name beside logo
//           drawText('SPY D TECHNOLOGY', 120, yPos - 10, 20, fontBold);
//         } else {
//           // Fallback to text logo if image not found
//           drawText('SPY D TECHNOLOGY', 200, yPos, 20, fontBold);
//         }
//       } catch (error) {
//         console.warn('Logo image not found, using text logo:', error);
//         // Fallback to text logo
//         drawText('SPY D TECHNOLOGY', 200, yPos, 20, fontBold);
//       }
      
//       yPos -= 30;
      
//       // Company Address
//       drawText('505/B-508, Fifth Floor, Sandhya Techno-1, Raidurg, Pan Maktha Village,', 110, yPos, 8);
//       yPos -= 15;
//       drawText('Serilingampally Mandal, RR Dist, Hyderabad-500081', 130, yPos, 8);
//       yPos -= 15;
//       drawText('CIN: U62020TS2023PTC173263', 215, yPos, 8);
//       yPos -= 25;

//       // Divider line
//       page.drawLine({
//         start: { x: 50, y: yPos + 10 },
//         end: { x: 550, y: yPos + 10 },
//         thickness: 1,
//         color: rgb(0, 0, 0),
//       });
//       yPos -= 10;

//       // Title
//       drawText(`Payslip for the Month of ${formData.month}, ${formData.year}`, 170, yPos, 14, fontBold);
//       yPos -= 30;

//       // Employee Details - Two columns without borders
//       const leftX = 50;
//       const rightX = 320;
//       const valueX = 170;
      
//       // Left Column
//       const leftDetails = [
//         { label: 'Name:', value: formData.name },
//         { label: 'Designation:', value: formData.designation },
//         { label: 'Department:', value: formData.department },
//         { label: 'Location:', value: formData.location },
//         { label: 'Effective Work Days:', value: formData.effectiveWorkDays },
//         { label: 'LOP:', value: formData.lop }
//       ];

//       // Right Column
//       const rightDetails = [
//         { label: 'Employee ID:', value: formData.employeeId },
//         { label: 'Bank Name:', value: formData.bankName },
//         { label: 'Bank Account No.:', value: formData.bankAccount },
//         { label: 'PAN No.:', value: formData.panNumber },
//         { label: 'UAN No.:', value: formData.uanNumber }
//       ];

//       // Draw left column
//       let leftY = yPos;
//       leftDetails.forEach((item) => {
//         drawText(item.label, leftX, leftY, 9, fontBold);
//         drawText(item.value, valueX, leftY, 9);
//         leftY -= 20;
//       });

//       // Draw right column
//       let rightY = yPos;
//       rightDetails.forEach((item) => {
//         drawText(item.label, rightX, rightY, 9, fontBold);
//         drawText(item.value, rightX + 100, rightY, 9);
//         rightY -= 20;
//       });

//       // Update yPos
//       yPos = leftY - 15;

//       // Divider line
//       page.drawLine({
//         start: { x: 50, y: yPos + 10 },
//         end: { x: 550, y: yPos + 10 },
//         thickness: 1,
//         color: rgb(0, 0, 0),
//       });
//       yPos -= 15;

//       // Earnings and Deductions Table Headers
//       const tableStartX = 50;
//       const earningsColWidth = 150;
//       const amountColWidth = 100;
//       const deductionsColWidth = 150;
//       const deductionsAmountColWidth = 100;

//       // Table Headers (with underline)
//       drawText('Earnings', tableStartX + 50, yPos, 10, fontBold);
//       drawText('Amount', tableStartX + earningsColWidth + 25, yPos, 10, fontBold);
//       drawText('Deductions', tableStartX + earningsColWidth + amountColWidth + 35, yPos, 10, fontBold);
//       drawText('Amount', tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 25, yPos, 10, fontBold);
      
//       yPos -= 5;
//       page.drawLine({
//         start: { x: tableStartX, y: yPos },
//         end: { x: tableStartX + 500, y: yPos },
//         thickness: 0.5,
//         color: rgb(0, 0, 0),
//       });
//       yPos -= 15;

//       const earningsData = [
//         ['Basic', formData.basic],
//         ['HRA', formData.hra],
//         ['Medical Allowance', formData.medicalAllowance],
//         ['Conveyance Allowance', formData.conveyanceAllowance],
//         ['Special Allowance', formData.specialAllowance],
//         ['Performance Bonus', formData.performanceBonus]
//       ];

//       const deductionsData = [
//         ['PF Employee', formData.pfEmployee],
//         ['PT', formData.pt]
//       ];

//       let maxRows = Math.max(earningsData.length, deductionsData.length);
      
//       // Table Rows (without borders)
//       for (let i = 0; i < maxRows; i++) {
//         if (i < earningsData.length) {
//           drawText(earningsData[i][0], tableStartX + 5, yPos, 9);
//           drawText(formatCurrency(earningsData[i][1]), tableStartX + earningsColWidth + 5, yPos, 9);
//         }
        
//         if (i < deductionsData.length) {
//           drawText(deductionsData[i][0], tableStartX + earningsColWidth + amountColWidth + 5, yPos, 9);
//           drawText(formatCurrency(deductionsData[i][1]), tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 5, yPos, 9);
//         }
        
//         yPos -= 18;
//       }

//       // Total row with double line
//       yPos -= 5;
//       page.drawLine({
//         start: { x: tableStartX, y: yPos + 5 },
//         end: { x: tableStartX + 500, y: yPos + 5 },
//         thickness: 1.5,
//         color: rgb(0, 0, 0),
//       });
      
//       const totalEarnings = earningsData.reduce((sum, item) => sum + item[1], 0);
//       const totalDeductions = deductionsData.reduce((sum, item) => sum + item[1], 0);
//       const netPay = totalEarnings - totalDeductions;

//       // Totals
//       yPos -= 5;
//       drawText('Total Earnings (Rs)', tableStartX + 5, yPos, 9, fontBold);
//       drawText(formatCurrency(totalEarnings), tableStartX + earningsColWidth + 5, yPos, 9, fontBold);
      
//       drawText('Total Deductions (Rs)', tableStartX + earningsColWidth + amountColWidth + 5, yPos, 9, fontBold);
//       drawText(formatCurrency(totalDeductions), tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 5, yPos, 9, fontBold);
      
//       yPos -= 30;

//       // Net Pay
//       drawText('Net Pay For The Month:', tableStartX, yPos, 12, fontBold);
//       drawText(formatCurrency(netPay), tableStartX + 200, yPos, 12, fontBold);
      
//       yPos -= 25;

//       // Amount in words
//       const words = numberToWords(netPay);
//       drawText(`(Rupees ${words} Only)`, tableStartX + 80, yPos, 10);
      
//       yPos -= 50;

//       // Footer line
//       page.drawLine({
//         start: { x: 50, y: yPos + 10 },
//         end: { x: 550, y: yPos + 10 },
//         thickness: 0.5,
//         color: rgb(0, 0, 0),
//       });
      
//       yPos -= 20;

//       // Footer text
//       drawText('This is a system generated payslip and does not require signature.', 115, yPos, 9);

//       // Save and download
//       const pdfBytes = await pdfDoc.save();
      
//       const blob = new Blob([pdfBytes], { type: 'application/pdf' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = `payslip_${formData.employeeId}_${formData.month}_${formData.year}.pdf`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
      
//       alert('Payslip generated successfully!');
//     } catch (error) {
//       console.error('Error generating payslip:', error);
//       alert('Failed to generate payslip. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleNumberChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: parseFloat(value) || 0
//     }));
//   };

//   const handleReset = () => {
//     setFormData({
//       name: '',
//       employeeId: '',
//       designation: '',
//       department: '',
//       location: 'Hyderabad',
//       effectiveWorkDays: '31',
//       lop: '0.0',
//       bankName: 'STATE BANK OF INDIA',
//       bankAccount: '',
//       panNumber: '',
//       uanNumber: '',
//       month: 'July',
//       year: '2026',
//       basic: 0,
//       hra: 0,
//       medicalAllowance: 0,
//       conveyanceAllowance: 0,
//       specialAllowance: 0,
//       performanceBonus: 0,
//       pfEmployee: 0,
//       pt: 0
//     });
//     alert('Form reset successfully!');
//   };

//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({length: 10}, (_, i) => (currentYear - 5 + i).toString());

//   return (
//     <div className="payslip-generator">
//       <h2>Generate Payslip</h2>
//       <form onSubmit={(e) => { e.preventDefault(); generatePDF(); }}>
//         <div className="form-section">
//           <h3>Employee Information</h3>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Full Name *</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., Ravindra Desai, Sai Bhargavi Kumar"
//               />
//             </div>
//             <div className="form-group">
//               <label>Employee ID *</label>
//               <input
//                 type="text"
//                 name="employeeId"
//                 value={formData.employeeId}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., SDT-A122"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Designation *</label>
//               <input
//                 type="text"
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., Talent Acquisition"
//               />
//             </div>
//             <div className="form-group">
//               <label>Department *</label>
//               <input
//                 type="text"
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., HR Department"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Location *</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., Hyderabad"
//               />
//             </div>
//             <div className="form-group">
//               <label>Effective Work Days</label>
//               <input
//                 type="text"
//                 name="effectiveWorkDays"
//                 value={formData.effectiveWorkDays}
//                 onChange={handleChange}
//                 placeholder="e.g., 31"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>LOP</label>
//               <input
//                 type="text"
//                 name="lop"
//                 value={formData.lop}
//                 onChange={handleChange}
//                 placeholder="e.g., 0.0"
//               />
//             </div>
//             <div className="form-group">
//               <label>PAN Number</label>
//               <input
//                 type="text"
//                 name="panNumber"
//                 value={formData.panNumber}
//                 onChange={handleChange}
//                 placeholder="e.g., HDRPR3759G"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h3>Bank Details</h3>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Bank Name</label>
//               <input
//                 type="text"
//                 name="bankName"
//                 value={formData.bankName}
//                 onChange={handleChange}
//                 placeholder="e.g., STATE BANK OF INDIA"
//               />
//             </div>
//             <div className="form-group">
//               <label>Bank Account No.</label>
//               <input
//                 type="text"
//                 name="bankAccount"
//                 value={formData.bankAccount}
//                 onChange={handleChange}
//                 placeholder="e.g., 42991992800"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>UAN Number</label>
//               <input
//                 type="text"
//                 name="uanNumber"
//                 value={formData.uanNumber}
//                 onChange={handleChange}
//                 placeholder="e.g., 102371372179"
//               />
//             </div>
//             <div className="form-group">
//               <label>Month *</label>
//               <select
//                 name="month"
//                 value={formData.month}
//                 onChange={handleChange}
//                 required
//               >
//                 {months.map(month => (
//                   <option key={month} value={month}>{month}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Year *</label>
//               <select
//                 name="year"
//                 value={formData.year}
//                 onChange={handleChange}
//                 required
//               >
//                 {years.map(year => (
//                   <option key={year} value={year}>{year}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h3>Earnings</h3>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Basic *</label>
//               <input
//                 type="number"
//                 name="basic"
//                 value={formData.basic}
//                 onChange={handleNumberChange}
//                 required
//                 step="0.01"
//                 placeholder="e.g., 17500"
//               />
//             </div>
//             <div className="form-group">
//               <label>HRA</label>
//               <input
//                 type="number"
//                 name="hra"
//                 value={formData.hra}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 8750"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Medical Allowance</label>
//               <input
//                 type="number"
//                 name="medicalAllowance"
//                 value={formData.medicalAllowance}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 1250"
//               />
//             </div>
//             <div className="form-group">
//               <label>Conveyance Allowance</label>
//               <input
//                 type="number"
//                 name="conveyanceAllowance"
//                 value={formData.conveyanceAllowance}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 1600"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Special Allowance</label>
//               <input
//                 type="number"
//                 name="specialAllowance"
//                 value={formData.specialAllowance}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 5900"
//               />
//             </div>
//             <div className="form-group">
//               <label>Performance Bonus</label>
//               <input
//                 type="number"
//                 name="performanceBonus"
//                 value={formData.performanceBonus}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 4030"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h3>Deductions</h3>
//           <div className="form-row">
//             <div className="form-group">
//               <label>PF Employee</label>
//               <input
//                 type="number"
//                 name="pfEmployee"
//                 value={formData.pfEmployee}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 3600"
//               />
//             </div>
//             <div className="form-group">
//               <label>PT</label>
//               <input
//                 type="number"
//                 name="pt"
//                 value={formData.pt}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 200"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="button-group">
//           <button 
//             type="submit" 
//             className="btn btn-primary"
//             disabled={loading}
//           >
//             {loading ? 'Generating...' : 'Generate Payslip'}
//           </button>
//           <button 
//             type="button" 
//             className="btn btn-secondary"
//             onClick={handleReset}
//           >
//             Reset Form
//           </button>
//         </div>
//       </form>

//       <style>{`
//         .payslip-generator {
//           max-width: 900px;
//           margin: 0 auto;
//           padding: 20px;
//           background: #ffffff;
//           border-radius: 10px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//         }

//         h2 {
//           color: #333;
//           margin-bottom: 25px;
//           text-align: center;
//           font-size: 28px;
//         }

//         .form-section {
//           background: #f8f9fa;
//           padding: 20px;
//           border-radius: 8px;
//           margin-bottom: 20px;
//           border: 1px solid #e9ecef;
//         }

//         .form-section h3 {
//           margin-top: 0;
//           margin-bottom: 15px;
//           color: #495057;
//           border-bottom: 2px solid #dee2e6;
//           padding-bottom: 10px;
//           font-size: 18px;
//         }

//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//           margin-bottom: 15px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;
//         }

//         .form-group label {
//           font-weight: 600;
//           margin-bottom: 5px;
//           color: #495057;
//           font-size: 14px;
//         }

//         .form-group input,
//         .form-group select {
//           padding: 10px 12px;
//           border: 1px solid #ced4da;
//           border-radius: 4px;
//           font-size: 14px;
//           transition: all 0.3s;
//         }

//         .form-group input:focus,
//         .form-group select:focus {
//           outline: none;
//           border-color: #80bdff;
//           box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//         }

//         .form-group input::placeholder {
//           color: #999;
//         }

//         .button-group {
//           display: flex;
//           gap: 15px;
//           justify-content: center;
//           margin-top: 25px;
//         }

//         .btn {
//           padding: 12px 35px;
//           border: none;
//           border-radius: 6px;
//           font-size: 16px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         .btn-primary {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//         }

//         .btn-primary:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
//         }

//         .btn-primary:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .btn-secondary {
//           background: #6c757d;
//           color: white;
//         }

//         .btn-secondary:hover {
//           background: #5a6268;
//           transform: translateY(-2px);
//         }

//         @media (max-width: 768px) {
//           .payslip-generator {
//             padding: 15px;
//           }
          
//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 15px;
//           }
          
//           .button-group {
//             flex-direction: column;
//           }
          
//           .btn {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PayslipGenerator;




import React, { useState } from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { encode } from 'base64-arraybuffer';
// Import your logo image
import logoImage from '../../../../public/logo.png';

const PayslipGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Ravindra Desai, Sai Bhargavi Kumar',
    employeeId: 'SDT-A122',
    designation: 'Talent Acquisition',
    department: 'HR Department',
    location: 'Hyderabad',
    effectiveWorkDays: '31',
    lop: '0.0',
    bankName: 'STATE BANK OF INDIA',
    bankAccount: '42991992800',
    panNumber: 'HDRPR3759G',
    uanNumber: '102371372179',
    month: 'July',
    year: '2026',
    basic: 17500,
    hra: 8750,
    medicalAllowance: 1250,
    conveyanceAllowance: 1600,
    specialAllowance: 5900,
    performanceBonus: 4030,
    pfEmployee: 3600,
    pt: 200
  });

  const formatCurrency = (amount) => {
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const numberToWords = (num) => {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    if (num === 0) return 'Zero';
    
    const numStr = Math.floor(num).toString();
    const numLength = numStr.length;
    
    if (numLength > 5) return 'Number too large';
    
    let words = '';
    
    if (numLength === 5 || numLength === 4) {
      const thousands = parseInt(numStr.slice(0, -3));
      if (thousands > 0) {
        words += (thousands < 20 ? ones[thousands] : tens[Math.floor(thousands / 10)] + ' ' + ones[thousands % 10]) + ' Thousand ';
      }
      const remainder = parseInt(numStr.slice(-3));
      if (remainder > 0) {
        words += (remainder < 100 ? '' : ones[Math.floor(remainder / 100)] + ' Hundred ') + 
                 (remainder % 100 > 0 ? (remainder % 100 < 20 ? ones[remainder % 100] : tens[Math.floor((remainder % 100) / 10)] + ' ' + ones[(remainder % 100) % 10]) : '');
      }
    } else if (numLength === 3) {
      words += ones[Math.floor(num / 100)] + ' Hundred ';
      const remainder = num % 100;
      if (remainder > 0) {
        words += (remainder < 20 ? ones[remainder] : tens[Math.floor(remainder / 10)] + ' ' + ones[remainder % 10]);
      }
    } else if (numLength === 2) {
      words += (num < 20 ? ones[num] : tens[Math.floor(num / 10)] + ' ' + ones[num % 10]);
    } else {
      words += ones[num];
    }
    
    return words.trim();
  };

  const generatePDF = async () => {
    setLoading(true);
    
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([595.28, 841.89]);
      const { width, height } = page.getSize();
      
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      // Load Arial Black font
      let fontArialBlack = fontBold; // Fallback to Helvetica Bold
      try {
        // Try to load Arial Black from public folder
        const fontBytes = await fetch('/fonts/arial-black.ttf').then(res => res.arrayBuffer());
        fontArialBlack = await pdfDoc.embedFont(fontBytes);
      } catch (error) {
        console.warn('Failed to load Arial Black font, using Helvetica Bold:', error);
        // Fallback to Helvetica Bold
        fontArialBlack = fontBold;
      }
      
      // Helper function to draw text
      const drawText = (text, x, y, size = 10, fontType = font, color = rgb(0, 0, 0)) => {
        page.drawText(text, {
          x,
          y,
          size,
          font: fontType,
          color,
        });
      };

      let yPos = height - 40;

      // ===== LOGO SECTION =====
      try {
        // Convert imported logo to array buffer
        const response = await fetch(logoImage);
        const imageBytes = await response.arrayBuffer();
        
        // Check if logo is PNG or JPG
        const isPNG = logoImage.toLowerCase().includes('.png');
        let logo;
        if (isPNG) {
          logo = await pdfDoc.embedPng(imageBytes);
        } else {
          logo = await pdfDoc.embedJpg(imageBytes);
        }
        
        // Draw the logo
        page.drawImage(logo, {
          x: 55,
          y: yPos - 40,
          width: 120,
          height: 30,
        });
        
        // Company Name beside logo
        drawText('SPY D TECHNOLOGY', 245, yPos - 10, 18, fontArialBlack);
      } catch (error) {
        console.warn('Failed to load logo, using text logo:', error);
        // Fallback to text logo
        drawText('SPY D TECHNOLOGY', 245, yPos, 18, fontArialBlack);
      }
      
      yPos -= 30;
      
      // Company Address
      drawText('505/B-508, Fifth Floor, Sandhya Techno-1, Raidurg, Pan Maktha Village,', 190, yPos, 9.5);
      yPos -= 15;
      drawText('Serilingampally Mandal, RR Dist, Hyderabad-500081', 220, yPos, 9.5);
      yPos -= 15;
      drawText('CIN: U62020TS2023PTC173263', 245, yPos, 9.5);
      yPos -= 25;

      

      // Title
      drawText(`Payslip for the Month of ${formData.month}, ${formData.year}`, 220, yPos, 13);
      yPos -= 35;
     

      // ===== EMPLOYEE DETAILS WITH BORDER AND DIVIDER =====
      const boxStartX = 50;
      const boxEndX = 550;
      const boxStartY = yPos + 10;
      const boxEndY = yPos - 135;

      // Draw border rectangle for employee details
      page.drawRectangle({
        x: boxStartX,
        y: boxEndY,
        width: boxEndX - boxStartX,
        height: boxStartY - boxEndY,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
        color: rgb(1, 1, 1),
      });

      // Draw vertical divider line
      const dividerX = 300;
      page.drawLine({
        start: { x: dividerX, y: boxStartY },
        end: { x: dividerX, y: boxEndY },
        thickness: 1,
        color: rgb(0, 0, 0),
      });

      // Left Column
      const leftX = 60;
      const leftValueX = 175;
      
      const leftDetails = [
        { label: 'Name:', value: formData.name },
        { label: 'Designation:', value: formData.designation },
        { label: 'Department:', value: formData.department },
        { label: 'Location:', value: formData.location },
        { label: 'Effective Work Days:', value: formData.effectiveWorkDays },
        { label: 'LOP:', value: formData.lop }
      ];

      // Right Column
      const rightX = 315;
      const rightValueX = 430;
      
      const rightDetails = [
        { label: 'Employee ID:', value: formData.employeeId },
        { label: 'Bank Name:', value: formData.bankName },
        { label: 'Bank Account No.:', value: formData.bankAccount },
        { label: 'PAN No.:', value: formData.panNumber },
        { label: 'UAN No.:', value: formData.uanNumber }
      ];

      // Draw left column
      let leftY = boxStartY - 15;
      leftDetails.forEach((item) => {
        drawText(item.label, leftX, leftY, 7, fontBold);
        drawText(item.value, leftValueX, leftY, 7);
        leftY -= 20;
      });

      // Draw right column
      let rightY = boxStartY - 15;
      rightDetails.forEach((item) => {
        drawText(item.label, rightX, rightY, 7, fontBold);
        drawText(item.value, rightValueX, rightY, 7);
        rightY -= 20;
      });

      yPos = boxEndY - 20;

      // Divider line
    //   page.drawLine({
    //     start: { x: 50, y: yPos + 10 },
    //     end: { x: 550, y: yPos + 10 },
    //     thickness: 1,
    //     color: rgb(0, 0, 0),
    //   });
    //   yPos -= 15;

      // ===== EARNINGS AND DEDUCTIONS TABLE WITH BORDER =====
      const tableStartX = 50;
      const tableEndX = 550;
      const earningsColWidth = 155;
      const amountColWidth = 95;
      const deductionsColWidth = 150;
      const deductionsAmountColWidth = 40;

      // Calculate table height based on rows
      const earningsData = [
        ['Basic', formData.basic],
        ['HRA', formData.hra],
        ['Medical Allowance', formData.medicalAllowance],
        ['Conveyance Allowance', formData.conveyanceAllowance],
        ['Special Allowance', formData.specialAllowance],
        ['Performance Bonus', formData.performanceBonus]
      ];

      const deductionsData = [
        ['PF Employee', formData.pfEmployee],
        ['PT', formData.pt]
      ];

      const maxRows = Math.max(earningsData.length, deductionsData.length);
      const tableStartY = yPos + 5;
      const tableEndY = yPos - (maxRows * 14) - 65; // Adjust for header and totals

      // Draw border rectangle for table
      page.drawRectangle({
        x: tableStartX,
        y: tableEndY,
        width: tableEndX - tableStartX,
        height: tableStartY - tableEndY,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
        color: rgb(1, 1, 1),
      });

      // Draw vertical dividers
      const divider1X = tableStartX + earningsColWidth + amountColWidth;
      const divider2X = tableStartX + earningsColWidth + amountColWidth + deductionsColWidth;
      
      // Vertical divider between Earnings and Amount
    //   page.drawLine({
    //     start: { x: tableStartX + earningsColWidth, y: tableStartY },
    //     end: { x: tableStartX + earningsColWidth, y: tableEndY },
    //     thickness: 1,
    //     color: rgb(0, 0, 0),
    //   });

      // Vertical divider between Amount and Deductions
      page.drawLine({
        start: { x: divider1X, y: tableStartY },
        end: { x: divider1X, y: tableEndY },
        thickness: 1,
        color: rgb(0, 0, 0),
      });

      // Vertical divider between Deductions and Amount
    //   page.drawLine({
    //     start: { x: divider2X, y: tableStartY },
    //     end: { x: divider2X, y: tableEndY },
    //     thickness: 1,
    //     color: rgb(0, 0, 0),
    //   });

      // Table Headers
      let tableYPos = tableStartY - 10;
      drawText('Earnings', tableStartX + 5, tableYPos, 10, fontBold);
      drawText('Amount', tableStartX + earningsColWidth + 45, tableYPos, 10, fontBold);
      drawText('Deductions', tableStartX + earningsColWidth + amountColWidth + 5, tableYPos, 10, fontBold);
      drawText('Amount', tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 50, tableYPos, 10, fontBold);
      
      // Horizontal line under headers
      tableYPos -= 5;
      page.drawLine({
        start: { x: tableStartX, y: tableYPos },
        end: { x: tableEndX, y: tableYPos },
        thickness: 0.5,
        color: rgb(0, 0, 0),
      });
      tableYPos -= 14;

      // Table Rows
      for (let i = 0; i < maxRows; i++) {
        if (i < earningsData.length) {
          drawText(earningsData[i][0], tableStartX + 5, tableYPos, 7);
          drawText(formatCurrency(earningsData[i][1]), tableStartX + earningsColWidth + 45, tableYPos, 7);
        }
        
        if (i < deductionsData.length) {
          drawText(deductionsData[i][0], tableStartX + earningsColWidth + amountColWidth + 5, tableYPos, 7);
          drawText(formatCurrency(deductionsData[i][1]), tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 50, tableYPos, 7);
        }
        
        tableYPos -= 14;
      }

      // Total row
      const totalEarnings = earningsData.reduce((sum, item) => sum + item[1], 0);
      const totalDeductions = deductionsData.reduce((sum, item) => sum + item[1], 0);
      const netPay = totalEarnings - totalDeductions;

      // Double line before totals
      tableYPos -= 20;
      page.drawLine({
        start: { x: tableStartX, y: tableYPos + 5 },
        end: { x: tableEndX, y: tableYPos + 5 },
        thickness: 1.5,
        color: rgb(0, 0, 0),
      });

      // Total Earnings
      tableYPos -= 5;
      drawText('Total Earnings (Rs)', tableStartX + 5, tableYPos, 7, fontBold);
      drawText(formatCurrency(totalEarnings), tableStartX + earningsColWidth + 45, tableYPos, 7, fontBold);
      
      // Total Deductions
      drawText('Total Deductions (Rs)', tableStartX + earningsColWidth + amountColWidth + 5, tableYPos, 7, fontBold);
      drawText(formatCurrency(totalDeductions), tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 50, tableYPos, 7, fontBold);

      yPos = tableEndY - 20;

      // ===== NET PAY =====
      drawText('Net Pay For The Month:', 50, yPos, 10, fontBold);
      drawText(formatCurrency(netPay), 250, yPos, 10, fontBold);
      
      yPos -= 28;

      // Amount in words
      const words = numberToWords(netPay);
      drawText(`(Rupees ${words} Only)`, 105, yPos, 10);
      
      yPos -= 55;

      // Footer
      page.drawLine({
        start: { x: 50, y: yPos + 10 },
        end: { x: 550, y: yPos + 10 },
        thickness: 0.5,
        color: rgb(0, 0, 0),
      });
      
      yPos -= 20;
      drawText('This is a system generated payslip and does not require signature.', 150, yPos, 9);

      // Save and download
      const pdfBytes = await pdfDoc.save();
      
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `payslip_${formData.employeeId}_${formData.month}_${formData.year}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      alert('Payslip generated successfully!');
    } catch (error) {
      console.error('Error generating payslip:', error);
      alert('Failed to generate payslip. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleReset = () => {
    setFormData({
      name: '',
      employeeId: '',
      designation: '',
      department: '',
      location: 'Hyderabad',
      effectiveWorkDays: '31',
      lop: '0.0',
      bankName: 'STATE BANK OF INDIA',
      bankAccount: '',
      panNumber: '',
      uanNumber: '',
      month: 'July',
      year: '2026',
      basic: 0,
      hra: 0,
      medicalAllowance: 0,
      conveyanceAllowance: 0,
      specialAllowance: 0,
      performanceBonus: 0,
      pfEmployee: 0,
      pt: 0
    });
    alert('Form reset successfully!');
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 10}, (_, i) => (currentYear - 5 + i).toString());

  return (
    <div className="payslip-generator">
      <h2>Generate Payslip</h2>
      <form onSubmit={(e) => { e.preventDefault(); generatePDF(); }}>
        <div className="form-section">
          <h3>Employee Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Ravada Hemanth Sai Phani Kumar"
              />
            </div>
            <div className="form-group">
              <label>Employee ID *</label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
                placeholder="e.g., SDT-A122"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Designation *</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                placeholder="e.g., Talent Acquisition"
              />
            </div>
            <div className="form-group">
              <label>Department *</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                placeholder="e.g., HR Department"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="e.g., Hyderabad"
              />
            </div>
            <div className="form-group">
              <label>Effective Work Days</label>
              <input
                type="text"
                name="effectiveWorkDays"
                value={formData.effectiveWorkDays}
                onChange={handleChange}
                placeholder="e.g., 31"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>LOP</label>
              <input
                type="text"
                name="lop"
                value={formData.lop}
                onChange={handleChange}
                placeholder="e.g., 0.0"
              />
            </div>
            <div className="form-group">
              <label>PAN Number</label>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="e.g., HDRPR3759G"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Bank Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="e.g., STATE BANK OF INDIA"
              />
            </div>
            <div className="form-group">
              <label>Bank Account No.</label>
              <input
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                placeholder="e.g., 42991992800"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>UAN Number</label>
              <input
                type="text"
                name="uanNumber"
                value={formData.uanNumber}
                onChange={handleChange}
                placeholder="e.g., 102371372179"
              />
            </div>
            <div className="form-group">
              <label>Month *</label>
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                required
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Year *</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Earnings</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Basic *</label>
              <input
                type="number"
                name="basic"
                value={formData.basic}
                onChange={handleNumberChange}
                required
                step="0.01"
                placeholder="e.g., 17500"
              />
            </div>
            <div className="form-group">
              <label>HRA</label>
              <input
                type="number"
                name="hra"
                value={formData.hra}
                onChange={handleNumberChange}
                step="0.01"
                placeholder="e.g., 8750"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Medical Allowance</label>
              <input
                type="number"
                name="medicalAllowance"
                value={formData.medicalAllowance}
                onChange={handleNumberChange}
                step="0.01"
                placeholder="e.g., 1250"
              />
            </div>
            <div className="form-group">
              <label>Conveyance Allowance</label>
              <input
                type="number"
                name="conveyanceAllowance"
                value={formData.conveyanceAllowance}
                onChange={handleNumberChange}
                step="0.01"
                placeholder="e.g., 1600"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Special Allowance</label>
              <input
                type="number"
                name="specialAllowance"
                value={formData.specialAllowance}
                onChange={handleNumberChange}
                step="0.01"
                placeholder="e.g., 5900"
              />
            </div>
            <div className="form-group">
              <label>Performance Bonus</label>
              <input
                type="number"
                name="performanceBonus"
                value={formData.performanceBonus}
                onChange={handleNumberChange}
                step="0.01"
                placeholder="e.g., 4030"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Deductions</h3>
          <div className="form-row">
            <div className="form-group">
              <label>PF Employee</label>
              <input
                type="number"
                name="pfEmployee"
                value={formData.pfEmployee}
                onChange={handleNumberChange}
                step="0.01"
                placeholder="e.g., 3600"
              />
            </div>
            <div className="form-group">
              <label>PT</label>
              <input
                type="number"
                name="pt"
                value={formData.pt}
                onChange={handleNumberChange}
                step="0.01"
                placeholder="e.g., 200"
              />
            </div>
          </div>
        </div>

        <div className="button-group">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Payslip'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={handleReset}
          >
            Reset Form
          </button>
        </div>
      </form>

      <style>{`
        .payslip-generator {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #333;
          margin-bottom: 25px;
          text-align: center;
          font-size: 28px;
        }

        .form-section {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          border: 1px solid #e9ecef;
        }

        .form-section h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #495057;
          border-bottom: 2px solid #dee2e6;
          padding-bottom: 10px;
          font-size: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 5px;
          color: #495057;
          font-size: 14px;
        }

        .form-group input,
        .form-group select {
          padding: 10px 12px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 14px;
          transition: all 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #80bdff;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        .form-group input::placeholder {
          color: #999;
        }

        .button-group {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 25px;
        }

        .btn {
          padding: 12px 35px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-secondary:hover {
          background: #5a6268;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .payslip-generator {
            padding: 15px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .button-group {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PayslipGenerator;




// import React, { useState } from 'react';
// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

// const PayslipGenerator = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: 'Ravada Hemanth Sai Phani Kumar',
//     employeeId: 'SDT-A122',
//     designation: 'Talent Acquisition',
//     department: 'HR Department',
//     location: 'Hyderabad',
//     effectiveWorkDays: '31',
//     lop: '0.0',
//     bankName: 'STATE BANK OF INDIA',
//     bankAccount: '42991992800',
//     panNumber: 'HDRPR3759G',
//     uanNumber: '102371372179',
//     month: 'July',
//     year: '2026',
//     basic: 17500,
//     hra: 8750,
//     medicalAllowance: 1250,
//     conveyanceAllowance: 1600,
//     specialAllowance: 5900,
//     performanceBonus: 4030,
//     pfEmployee: 3600,
//     pt: 200
//   });

//   const formatCurrency = (amount) => {
//     return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   };

//   const numberToWords = (num) => {
//     const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//     const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
//     if (num === 0) return 'Zero';
    
//     const numStr = Math.floor(num).toString();
//     const numLength = numStr.length;
    
//     if (numLength > 5) return 'Number too large';
    
//     let words = '';
    
//     if (numLength === 5 || numLength === 4) {
//       const thousands = parseInt(numStr.slice(0, -3));
//       if (thousands > 0) {
//         words += (thousands < 20 ? ones[thousands] : tens[Math.floor(thousands / 10)] + ' ' + ones[thousands % 10]) + ' Thousand ';
//       }
//       const remainder = parseInt(numStr.slice(-3));
//       if (remainder > 0) {
//         words += (remainder < 100 ? '' : ones[Math.floor(remainder / 100)] + ' Hundred ') + 
//                  (remainder % 100 > 0 ? (remainder % 100 < 20 ? ones[remainder % 100] : tens[Math.floor((remainder % 100) / 10)] + ' ' + ones[(remainder % 100) % 10]) : '');
//       }
//     } else if (numLength === 3) {
//       words += ones[Math.floor(num / 100)] + ' Hundred ';
//       const remainder = num % 100;
//       if (remainder > 0) {
//         words += (remainder < 20 ? ones[remainder] : tens[Math.floor(remainder / 10)] + ' ' + ones[remainder % 10]);
//       }
//     } else if (numLength === 2) {
//       words += (num < 20 ? ones[num] : tens[Math.floor(num / 10)] + ' ' + ones[num % 10]);
//     } else {
//       words += ones[num];
//     }
    
//     return words.trim();
//   };

//   const generatePDF = async () => {
//     setLoading(true);
    
//     try {
//       const pdfDoc = await PDFDocument.create();
//       const page = pdfDoc.addPage([595.28, 841.89]);
//       const { width, height } = page.getSize();
      
//       const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
//       const drawText = (text, x, y, size = 10, fontType = font, color = rgb(0, 0, 0)) => {
//         page.drawText(text, {
//           x,
//           y,
//           size,
//           font: fontType,
//           color,
//         });
//       };

//       let yPos = height - 40;

//       // ===== HEADER SECTION =====
//       drawText('SPY D TECHNOLOGY', 200, yPos, 20, fontBold);
//       yPos -= 25;
      
//       drawText('505/B-508, Fifth Floor, Sandhya Techno-1, Raidurg, Pan Maktha Village,', 120, yPos, 9);
//       yPos -= 15;
//       drawText('Serilingampally Mandal, RR Dist, Hyderabad-500081', 155, yPos, 9);
//       yPos -= 15;
//       drawText('CIN: U62020TS2023PTC173263', 220, yPos, 9);
//       yPos -= 30;

     

//       // Title
//       drawText(`Payslip for the Month of ${formData.month}, ${formData.year}`, 185, yPos, 14, fontBold);
//       yPos -= 35;
     

//       // ===== EMPLOYEE DETAILS WITH BORDER AND DIVIDER =====
//       const boxStartX = 50;
//       const boxEndX = 550;
//       const boxStartY = yPos + 10;
//       const boxEndY = yPos - 135;

//       // Draw border rectangle for employee details
//       page.drawRectangle({
//         x: boxStartX,
//         y: boxEndY,
//         width: boxEndX - boxStartX,
//         height: boxStartY - boxEndY,
//         borderColor: rgb(0, 0, 0),
//         borderWidth: 1,
//         color: rgb(1, 1, 1),
//       });

//       // Draw vertical divider line
//       const dividerX = 300;
//       page.drawLine({
//         start: { x: dividerX, y: boxStartY },
//         end: { x: dividerX, y: boxEndY },
//         thickness: 1,
//         color: rgb(0, 0, 0),
//       });

//       // Left Column
//       const leftX = 60;
//       const leftValueX = 175;
      
//       const leftDetails = [
//         { label: 'Name:', value: formData.name },
//         { label: 'Designation:', value: formData.designation },
//         { label: 'Department:', value: formData.department },
//         { label: 'Location:', value: formData.location },
//         { label: 'Effective Work Days:', value: formData.effectiveWorkDays },
//         { label: 'LOP:', value: formData.lop }
//       ];

//       // Right Column
//       const rightX = 315;
//       const rightValueX = 430;
      
//       const rightDetails = [
//         { label: 'Employee ID:', value: formData.employeeId },
//         { label: 'Bank Name:', value: formData.bankName },
//         { label: 'Bank Account No.:', value: formData.bankAccount },
//         { label: 'PAN No.:', value: formData.panNumber },
//         { label: 'UAN No.:', value: formData.uanNumber }
//       ];

//       // Draw left column
//       let leftY = boxStartY - 15;
//       leftDetails.forEach((item) => {
//         drawText(item.label, leftX, leftY, 9, fontBold);
//         drawText(item.value, leftValueX, leftY, 9);
//         leftY -= 20;
//       });

//       // Draw right column
//       let rightY = boxStartY - 15;
//       rightDetails.forEach((item) => {
//         drawText(item.label, rightX, rightY, 9, fontBold);
//         drawText(item.value, rightValueX, rightY, 9);
//         rightY -= 20;
//       });

//       yPos = boxEndY - 15;

//       // Divider line
//       page.drawLine({
//         start: { x: 50, y: yPos + 10 },
//         end: { x: 550, y: yPos + 10 },
//         thickness: 1,
//         color: rgb(0, 0, 0),
//       });
//       yPos -= 15;

//       // ===== EARNINGS AND DEDUCTIONS TABLE WITH BORDER =====
//       const tableStartX = 50;
//       const tableEndX = 550;
//       const earningsColWidth = 150;
//       const amountColWidth = 90;
//       const deductionsColWidth = 150;
//       const deductionsAmountColWidth = 90;

//       // Calculate table height based on rows
//       const earningsData = [
//         ['Basic', formData.basic],
//         ['HRA', formData.hra],
//         ['Medical Allowance', formData.medicalAllowance],
//         ['Conveyance Allowance', formData.conveyanceAllowance],
//         ['Special Allowance', formData.specialAllowance],
//         ['Performance Bonus', formData.performanceBonus]
//       ];

//       const deductionsData = [
//         ['PF Employee', formData.pfEmployee],
//         ['PT', formData.pt]
//       ];

//       const maxRows = Math.max(earningsData.length, deductionsData.length);
//       const tableStartY = yPos + 10;
//       const tableEndY = yPos - (maxRows * 18) - 65; // Adjust for header and totals

//       // Draw border rectangle for table
//       page.drawRectangle({
//         x: tableStartX,
//         y: tableEndY,
//         width: tableEndX - tableStartX,
//         height: tableStartY - tableEndY,
//         borderColor: rgb(0, 0, 0),
//         borderWidth: 1,
//         color: rgb(1, 1, 1),
//       });

//       // Draw vertical dividers
//       const divider1X = tableStartX + earningsColWidth + amountColWidth;
//       const divider2X = tableStartX + earningsColWidth + amountColWidth + deductionsColWidth;
      
//       // Vertical divider between Earnings and Amount
//       page.drawLine({
//         start: { x: tableStartX + earningsColWidth, y: tableStartY },
//         end: { x: tableStartX + earningsColWidth, y: tableEndY },
//         thickness: 1,
//         color: rgb(0, 0, 0),
//       });

//       // Vertical divider between Amount and Deductions
//       page.drawLine({
//         start: { x: divider1X, y: tableStartY },
//         end: { x: divider1X, y: tableEndY },
//         thickness: 1,
//         color: rgb(0, 0, 0),
//       });

//       // Vertical divider between Deductions and Amount
//       page.drawLine({
//         start: { x: divider2X, y: tableStartY },
//         end: { x: divider2X, y: tableEndY },
//         thickness: 1,
//         color: rgb(0, 0, 0),
//       });

//       // Table Headers
//       let tableYPos = tableStartY - 15;
//       drawText('Earnings', tableStartX + 55, tableYPos, 10, fontBold);
//       drawText('Amount', tableStartX + earningsColWidth + 25, tableYPos, 10, fontBold);
//       drawText('Deductions', tableStartX + earningsColWidth + amountColWidth + 45, tableYPos, 10, fontBold);
//       drawText('Amount', tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 25, tableYPos, 10, fontBold);
      
//       // Horizontal line under headers
//       tableYPos -= 5;
//       page.drawLine({
//         start: { x: tableStartX, y: tableYPos },
//         end: { x: tableEndX, y: tableYPos },
//         thickness: 0.5,
//         color: rgb(0, 0, 0),
//       });
//       tableYPos -= 15;

//       // Table Rows
//       for (let i = 0; i < maxRows; i++) {
//         if (i < earningsData.length) {
//           drawText(earningsData[i][0], tableStartX + 5, tableYPos, 9);
//           drawText(formatCurrency(earningsData[i][1]), tableStartX + earningsColWidth + 5, tableYPos, 9);
//         }
        
//         if (i < deductionsData.length) {
//           drawText(deductionsData[i][0], tableStartX + earningsColWidth + amountColWidth + 5, tableYPos, 9);
//           drawText(formatCurrency(deductionsData[i][1]), tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 5, tableYPos, 9);
//         }
        
//         tableYPos -= 18;
//       }

//       // Total row
//       const totalEarnings = earningsData.reduce((sum, item) => sum + item[1], 0);
//       const totalDeductions = deductionsData.reduce((sum, item) => sum + item[1], 0);
//       const netPay = totalEarnings - totalDeductions;

//       // Double line before totals
//       tableYPos -= 5;
//       page.drawLine({
//         start: { x: tableStartX, y: tableYPos + 5 },
//         end: { x: tableEndX, y: tableYPos + 5 },
//         thickness: 1.5,
//         color: rgb(0, 0, 0),
//       });

//       // Total Earnings
//       tableYPos -= 5;
//       drawText('Total Earnings (Rs)', tableStartX + 5, tableYPos, 9, fontBold);
//       drawText(formatCurrency(totalEarnings), tableStartX + earningsColWidth + 5, tableYPos, 9, fontBold);
      
//       // Total Deductions
//       drawText('Total Deductions (Rs)', tableStartX + earningsColWidth + amountColWidth + 5, tableYPos, 9, fontBold);
//       drawText(formatCurrency(totalDeductions), tableStartX + earningsColWidth + amountColWidth + deductionsColWidth + 5, tableYPos, 9, fontBold);

//       yPos = tableEndY - 20;

//       // ===== NET PAY =====
//       drawText('Net Pay For The Month:', 50, yPos, 12, fontBold);
//       drawText(formatCurrency(netPay), 250, yPos, 12, fontBold);
      
//       yPos -= 28;

//       // Amount in words
//       const words = numberToWords(netPay);
//       drawText(`(Rupees ${words} Only)`, 105, yPos, 10);
      
//       yPos -= 55;

//       // Footer
//       page.drawLine({
//         start: { x: 50, y: yPos + 10 },
//         end: { x: 550, y: yPos + 10 },
//         thickness: 0.5,
//         color: rgb(0, 0, 0),
//       });
      
//       yPos -= 20;
//       drawText('This is a system generated payslip and does not require signature.', 115, yPos, 9);

//       // Save and download
//       const pdfBytes = await pdfDoc.save();
      
//       const blob = new Blob([pdfBytes], { type: 'application/pdf' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = `payslip_${formData.employeeId}_${formData.month}_${formData.year}.pdf`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
      
//       alert('Payslip generated successfully!');
//     } catch (error) {
//       console.error('Error generating payslip:', error);
//       alert('Failed to generate payslip. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleNumberChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: parseFloat(value) || 0
//     }));
//   };

//   const handleReset = () => {
//     setFormData({
//       name: '',
//       employeeId: '',
//       designation: '',
//       department: '',
//       location: 'Hyderabad',
//       effectiveWorkDays: '31',
//       lop: '0.0',
//       bankName: 'STATE BANK OF INDIA',
//       bankAccount: '',
//       panNumber: '',
//       uanNumber: '',
//       month: 'July',
//       year: '2026',
//       basic: 0,
//       hra: 0,
//       medicalAllowance: 0,
//       conveyanceAllowance: 0,
//       specialAllowance: 0,
//       performanceBonus: 0,
//       pfEmployee: 0,
//       pt: 0
//     });
//     alert('Form reset successfully!');
//   };

//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({length: 10}, (_, i) => (currentYear - 5 + i).toString());

//   return (
//     <div className="payslip-generator">
//       <h2>Generate Payslip</h2>
//       <form onSubmit={(e) => { e.preventDefault(); generatePDF(); }}>
//         <div className="form-section">
//           <h3>Employee Information</h3>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Full Name *</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., Ravada Hemanth Sai Phani Kumar"
//               />
//             </div>
//             <div className="form-group">
//               <label>Employee ID *</label>
//               <input
//                 type="text"
//                 name="employeeId"
//                 value={formData.employeeId}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., SDT-A122"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Designation *</label>
//               <input
//                 type="text"
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., Talent Acquisition"
//               />
//             </div>
//             <div className="form-group">
//               <label>Department *</label>
//               <input
//                 type="text"
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., HR Department"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Location *</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., Hyderabad"
//               />
//             </div>
//             <div className="form-group">
//               <label>Effective Work Days</label>
//               <input
//                 type="text"
//                 name="effectiveWorkDays"
//                 value={formData.effectiveWorkDays}
//                 onChange={handleChange}
//                 placeholder="e.g., 31"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>LOP</label>
//               <input
//                 type="text"
//                 name="lop"
//                 value={formData.lop}
//                 onChange={handleChange}
//                 placeholder="e.g., 0.0"
//               />
//             </div>
//             <div className="form-group">
//               <label>PAN Number</label>
//               <input
//                 type="text"
//                 name="panNumber"
//                 value={formData.panNumber}
//                 onChange={handleChange}
//                 placeholder="e.g., HDRPR3759G"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h3>Bank Details</h3>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Bank Name</label>
//               <input
//                 type="text"
//                 name="bankName"
//                 value={formData.bankName}
//                 onChange={handleChange}
//                 placeholder="e.g., STATE BANK OF INDIA"
//               />
//             </div>
//             <div className="form-group">
//               <label>Bank Account No.</label>
//               <input
//                 type="text"
//                 name="bankAccount"
//                 value={formData.bankAccount}
//                 onChange={handleChange}
//                 placeholder="e.g., 42991992800"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>UAN Number</label>
//               <input
//                 type="text"
//                 name="uanNumber"
//                 value={formData.uanNumber}
//                 onChange={handleChange}
//                 placeholder="e.g., 102371372179"
//               />
//             </div>
//             <div className="form-group">
//               <label>Month *</label>
//               <select
//                 name="month"
//                 value={formData.month}
//                 onChange={handleChange}
//                 required
//               >
//                 {months.map(month => (
//                   <option key={month} value={month}>{month}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Year *</label>
//               <select
//                 name="year"
//                 value={formData.year}
//                 onChange={handleChange}
//                 required
//               >
//                 {years.map(year => (
//                   <option key={year} value={year}>{year}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h3>Earnings</h3>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Basic *</label>
//               <input
//                 type="number"
//                 name="basic"
//                 value={formData.basic}
//                 onChange={handleNumberChange}
//                 required
//                 step="0.01"
//                 placeholder="e.g., 17500"
//               />
//             </div>
//             <div className="form-group">
//               <label>HRA</label>
//               <input
//                 type="number"
//                 name="hra"
//                 value={formData.hra}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 8750"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Medical Allowance</label>
//               <input
//                 type="number"
//                 name="medicalAllowance"
//                 value={formData.medicalAllowance}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 1250"
//               />
//             </div>
//             <div className="form-group">
//               <label>Conveyance Allowance</label>
//               <input
//                 type="number"
//                 name="conveyanceAllowance"
//                 value={formData.conveyanceAllowance}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 1600"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Special Allowance</label>
//               <input
//                 type="number"
//                 name="specialAllowance"
//                 value={formData.specialAllowance}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 5900"
//               />
//             </div>
//             <div className="form-group">
//               <label>Performance Bonus</label>
//               <input
//                 type="number"
//                 name="performanceBonus"
//                 value={formData.performanceBonus}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 4030"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <h3>Deductions</h3>
//           <div className="form-row">
//             <div className="form-group">
//               <label>PF Employee</label>
//               <input
//                 type="number"
//                 name="pfEmployee"
//                 value={formData.pfEmployee}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 3600"
//               />
//             </div>
//             <div className="form-group">
//               <label>PT</label>
//               <input
//                 type="number"
//                 name="pt"
//                 value={formData.pt}
//                 onChange={handleNumberChange}
//                 step="0.01"
//                 placeholder="e.g., 200"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="button-group">
//           <button 
//             type="submit" 
//             className="btn btn-primary"
//             disabled={loading}
//           >
//             {loading ? 'Generating...' : 'Generate Payslip'}
//           </button>
//           <button 
//             type="button" 
//             className="btn btn-secondary"
//             onClick={handleReset}
//           >
//             Reset Form
//           </button>
//         </div>
//       </form>

//       <style>{`
//         .payslip-generator {
//           max-width: 900px;
//           margin: 0 auto;
//           padding: 20px;
//           background: #ffffff;
//           border-radius: 10px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//         }

//         h2 {
//           color: #333;
//           margin-bottom: 25px;
//           text-align: center;
//           font-size: 28px;
//         }

//         .form-section {
//           background: #f8f9fa;
//           padding: 20px;
//           border-radius: 8px;
//           margin-bottom: 20px;
//           border: 1px solid #e9ecef;
//         }

//         .form-section h3 {
//           margin-top: 0;
//           margin-bottom: 15px;
//           color: #495057;
//           border-bottom: 2px solid #dee2e6;
//           padding-bottom: 10px;
//           font-size: 18px;
//         }

//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//           margin-bottom: 15px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;
//         }

//         .form-group label {
//           font-weight: 600;
//           margin-bottom: 5px;
//           color: #495057;
//           font-size: 14px;
//         }

//         .form-group input,
//         .form-group select {
//           padding: 10px 12px;
//           border: 1px solid #ced4da;
//           border-radius: 4px;
//           font-size: 14px;
//           transition: all 0.3s;
//         }

//         .form-group input:focus,
//         .form-group select:focus {
//           outline: none;
//           border-color: #80bdff;
//           box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
//         }

//         .form-group input::placeholder {
//           color: #999;
//         }

//         .button-group {
//           display: flex;
//           gap: 15px;
//           justify-content: center;
//           margin-top: 25px;
//         }

//         .btn {
//           padding: 12px 35px;
//           border: none;
//           border-radius: 6px;
//           font-size: 16px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         .btn-primary {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//         }

//         .btn-primary:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
//         }

//         .btn-primary:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .btn-secondary {
//           background: #6c757d;
//           color: white;
//         }

//         .btn-secondary:hover {
//           background: #5a6268;
//           transform: translateY(-2px);
//         }

//         @media (max-width: 768px) {
//           .payslip-generator {
//             padding: 15px;
//           }
          
//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 15px;
//           }
          
//           .button-group {
//             flex-direction: column;
//           }
          
//           .btn {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PayslipGenerator;