import React, { useState, useEffect } from "react";
import { Download, Printer, FileText, Calendar, DollarSign, Plus, Trash2 } from "lucide-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Logo from "../../../assets/Home/logo.png";

function Invoice() {

  const [showForm, setShowForm] = useState(true);

  // Bank details input state
  const [bankInputs, setBankInputs] = useState({
    accountName: "WEBJERRY TECHNOLOGIES PVT LTD",
    bankName: "HDFC Bank",
    accountNumber: "50200095339519",
    ifscCode: "HDFC0001445",
    branch: "GROUND FLOOR, OPP. ICICI BANK, APTE ROAD, DECCAN GYMKHANA, SHIVAJI NAGAR"
  });

  // Customer details input state
  const [customerInputs, setCustomerInputs] = useState({
    name: "Skylark Global",
    address: "Pune",
  });

  // Company details input state
  const [companyInputs, setCompanyInputs] = useState({
    name: "Webjerry Technologies Pvt. Ltd.",
    address: "Office No 208, 2nd Floor, R Square Commercial Complex, Pune Banglore Highway, Warje, Pune, Maharashtra 411058",
    phone: "+919130070722",
    website: "www.webjerry.com"
  });

  // Proposal details input state
  const [proposalInputs, setProposalInputs] = useState({
    proposalNumber: "PROP-252",
    date: new Date().toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    validTill: "Fri 16 Jan 2026",
  });

  // Services state
  const [services, setServices] = useState([
    {
      id: Date.now() + 1,
      description: "Business Website",
      hsnSac: "998314",
      quantity: "1",
      unitPrice: 24999.00,
      gstRate: 9, // GST rate as percentage (e.g., 9 for 9%)
      amount: 24999.00,
    },
  ]);
  const calculateEffectiveGstRate = () => {
    const subTotal = taxDetails.subTotal;
    if (subTotal === 0) return 0;
    return ((taxDetails.gst / subTotal) * 100).toFixed(2);
  };
  // Calculate tax details
  const calculateTaxDetails = () => {
    const subTotal = services.reduce((sum, service) => sum + service.amount, 0);
    let totalGst = 0;

    services.forEach(service => {
      const serviceAmount = service.amount;
      const gstPercent = service.gstRate / 100; // Convert percentage to decimal
      totalGst += serviceAmount * gstPercent;
    });

    const total = subTotal + totalGst;

    return {
      subTotal: parseFloat(subTotal.toFixed(2)),
      gst: parseFloat(totalGst.toFixed(2)),
      total: parseFloat(total.toFixed(2))
    };
  };

  const taxDetails = calculateTaxDetails();

  const handleDownloadPDF = async () => {
    const proposalElement = document.getElementById("proposal");

    // Hide action buttons
    const printHeader = proposalElement.querySelector(".print\\:hidden");
    if (printHeader) printHeader.style.display = "none";

    // Store original styles
    const originalStyles = {
      width: proposalElement.style.width,
      maxWidth: proposalElement.style.maxWidth,
      margin: proposalElement.style.margin,
      padding: proposalElement.style.padding,
      background: proposalElement.style.background,
      borderRadius: proposalElement.style.borderRadius,
      boxShadow: proposalElement.style.boxShadow,
      position: proposalElement.style.position,
      left: proposalElement.style.left,
      top: proposalElement.style.top,
    };

    try {
      // Create a temporary container for PDF generation
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '794px';
      tempContainer.style.background = '#ffffff';
      tempContainer.style.zIndex = '-9999';

      // Clone the main content for page 1
      const mainContentClone = proposalElement.querySelector('.main-content').cloneNode(true);
      mainContentClone.style.width = '794px';
      mainContentClone.style.padding = '20px 30px';
      mainContentClone.style.background = '#ffffff';
      mainContentClone.style.margin = '0';

      // Clone the terms section for page 2
      const termsSectionClone = proposalElement.querySelector('#terms-section').cloneNode(true);
      termsSectionClone.style.width = '794px';
      termsSectionClone.style.padding = '20px 30px';
      termsSectionClone.style.background = '#ffffff';
      termsSectionClone.style.margin = '0';
      termsSectionClone.style.pageBreakBefore = 'always';

      // Clear existing content and add cloned content
      tempContainer.innerHTML = '';
      tempContainer.appendChild(mainContentClone);
      tempContainer.appendChild(termsSectionClone);

      // Append to body
      document.body.appendChild(tempContainer);

      // Initialize PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);

      // Function to add page content
      const addPageContent = async (element, isFirstPage = true) => {
        if (!isFirstPage) {
          pdf.addPage();
        }

        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: true,
          width: 794,
          windowWidth: 794,
          height: element.scrollHeight,
          windowHeight: element.scrollHeight,
          onclone: (clonedDoc) => {
            // Ensure all elements are visible in the cloned document
            const allElements = clonedDoc.querySelectorAll('*');
            allElements.forEach(el => {
              el.style.visibility = 'visible';
              el.style.opacity = '1';
            });
          }
        });

        const imgWidth = contentWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let currentPageHeight = margin;

        // Calculate if content fits on one page
        if (imgHeight <= pageHeight - margin) {
          pdf.addImage(canvas, "PNG", margin, margin, imgWidth, imgHeight);
        } else {
          // Split content across pages
          let heightLeft = imgHeight;
          let position = 0;
          const pageContentHeight = pageHeight - margin * 2;

          while (heightLeft > 0) {
            const sectionHeight = Math.min(pageContentHeight, heightLeft);

            if (position > 0) {
              pdf.addPage();
            }

            // Create a temporary canvas for this section
            const tempCanvas = document.createElement('canvas');
            const ctx = tempCanvas.getContext('2d');
            tempCanvas.width = canvas.width;
            tempCanvas.height = (sectionHeight / imgHeight) * canvas.height;

            // Draw the section of the original canvas
            ctx.drawImage(
              canvas,
              0,
              (position / imgHeight) * canvas.height,
              canvas.width,
              (sectionHeight / imgHeight) * canvas.height,
              0,
              0,
              tempCanvas.width,
              tempCanvas.height
            );

            pdf.addImage(tempCanvas, "PNG", margin, margin, imgWidth, sectionHeight);

            heightLeft -= sectionHeight;
            position += sectionHeight;
          }
        }
      };

      // Add main content (first page)
      await addPageContent(mainContentClone, true);

      // Add terms content (second page)
      await addPageContent(termsSectionClone, false);

      // Add page numbers
      const pageCount = pdf.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i);
        pdf.setFontSize(9);
        pdf.setTextColor(100);
        pdf.text(
          `Page ${i} of ${pageCount}`,
          pageWidth / 2,
          pageHeight - 10,
          { align: "center" }
        );
      }

      // Save PDF
      pdf.save(`Proposal-${proposalInputs.proposalNumber}.pdf`);

    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      // Clean up
      const tempContainer = document.querySelector('div[style*="left: -9999px"]');
      if (tempContainer) {
        document.body.removeChild(tempContainer);
      }

      // Restore original styles
      if (printHeader) printHeader.style.display = "flex";

      Object.keys(originalStyles).forEach(key => {
        if (originalStyles[key] !== undefined) {
          proposalElement.style[key] = originalStyles[key];
        } else {
          proposalElement.style.removeProperty(key);
        }
      });
    }
  };

  const handleGenerate = () => {
    setShowForm(false);
  };

  const handlePrint = () => {
    // Add page breaks for print
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        @page {
          margin: 15mm;
          size: A4;
        }
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          font-size: 12pt;
        }
        .no-print {
          display: none !important;
        }
        .print-page-break {
          page-break-before: always !important;
          break-before: page !important;
        }
        .avoid-break {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        .keep-together {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        table {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        tr {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        td, th {
          page-break-inside: avoid !important;
        }
        p {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          orphans: 3;
          widows: 3;
        }
        h1, h2, h3, h4 {
          page-break-after: avoid !important;
        }
        ul, ol {
          page-break-inside: avoid !important;
        }
        li {
          page-break-inside: avoid !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Trigger print
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.head.removeChild(style);
      }, 100);
    }, 100);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleBankInputChange = (field, value) => {
    setBankInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCustomerInputChange = (field, value) => {
    setCustomerInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCompanyInputChange = (field, value) => {
    setCompanyInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProposalInputChange = (field, value) => {
    setProposalInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceChange = (id, field, value) => {
    setServices(prev => prev.map(service => {
      if (service.id === id) {
        const updatedService = { ...service };
        updatedService[field] = value;

        if (field === 'unitPrice' || field === 'quantity' || field === 'gstRate') {
          const unitPrice = field === 'unitPrice' ? parseFloat(value) || 0 : service.unitPrice;
          const quantity = field === 'quantity' ? value : service.quantity;
          const gstRate = field === 'gstRate' ? parseFloat(value) || 0 : service.gstRate;

          let quantityNumber = 1;
          const match = quantity.match(/(\d+(\.\d+)?)/);
          if (match) {
            quantityNumber = parseFloat(match[1]);
          }

          const baseAmount = unitPrice * quantityNumber;
          updatedService.amount = parseFloat(baseAmount.toFixed(2));
          updatedService.gstRate = gstRate;
        }

        return updatedService;
      }
      return service;
    }));
  };

  const addService = () => {
    const newId = Date.now();
    setServices(prev => [...prev, {
      id: newId,
      description: "",
      hsnSac: "",
      quantity: "1 ",
      unitPrice: 0,
      gstRate: 9,
      amount: 0,
      details: ""
    }]);
  };

  const removeService = (id) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  // GST rate options as numbers
  const gstOptions = [0, 5, 12, 18, 28];

  useEffect(() => {
    localStorage.removeItem("proposalData");
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 md:px-8 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {showForm ? (
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                  Generate Proposal
                </h1>
              </div>

              {/* Company Details Input Section */}
              <div className="mb-6 md:mb-8 p-4 md:p-6 rounded-xl border border-blue-200">
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Company Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={companyInputs.name}
                      onChange={(e) => handleCompanyInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="text"
                      value={companyInputs.phone}
                      onChange={(e) => handleCompanyInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <textarea
                      value={companyInputs.address}
                      onChange={(e) => handleCompanyInputChange('address', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows="2"
                      placeholder="Enter company address"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input
                      type="text"
                      value={companyInputs.website}
                      onChange={(e) => handleCompanyInputChange('website', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter website URL"
                    />
                  </div>
                </div>
              </div>

              {/* Customer Details Input Section */}
              <div className="mb-6 md:mb-8 p-4 md:p-6 rounded-xl border border-green-200">
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Customer Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      value={customerInputs.name}
                      onChange={(e) => handleCustomerInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter customer name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      value={customerInputs.address}
                      onChange={(e) => handleCustomerInputChange('address', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter customer address"
                    />
                  </div>
                </div>
              </div>

              {/* Proposal Details Input Section */}
              <div className="mb-6 md:mb-8 p-4 md:p-6 rounded-xl border border-purple-200">
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Proposal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Proposal Number *
                    </label>
                    <input
                      type="text"
                      value={proposalInputs.proposalNumber}
                      onChange={(e) => handleProposalInputChange('proposalNumber', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., PROP-252"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Valid Till *
                    </label>
                    <input
                      type="text"
                      value={proposalInputs.validTill}
                      onChange={(e) => handleProposalInputChange('validTill', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Fri 16 Jan 2026"
                    />
                  </div>
                </div>
              </div>

              {/* Services Input Section */}
              <div className="mb-6 md:mb-8 p-4 md:p-6 rounded-xl border border-yellow-200">
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Services & Pricing
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={service.id} className="p-3 md:p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-gray-700 text-sm md:text-base">Service {index + 1}</h4>
                        {services.length > 1 && (
                          <button
                            onClick={() => removeService(service.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        <div>
                          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            Description *
                          </label>
                          <input
                            type="text"
                            value={service.description}
                            onChange={(e) => handleServiceChange(service.id, 'description', e.target.value)}
                            className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded"
                            placeholder="Service description"
                          />
                        </div>
                        <div>
                          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            HSN/SAC
                          </label>
                          <input
                            type="text"
                            value={service.hsnSac}
                            onChange={(e) => handleServiceChange(service.id, 'hsnSac', e.target.value)}
                            className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded"
                            placeholder="HSN/SAC code"
                          />
                        </div>
                        <div>
                          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            Quantity
                          </label>
                          <input
                            type="text"
                            value={service.quantity}
                            onChange={(e) => handleServiceChange(service.id, 'quantity', e.target.value)}
                            className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded"
                            placeholder="e.g., 1, 2 , 7 "
                          />
                        </div>
                        <div>
                          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            Unit Price *
                          </label>
                          <input
                            type="number"
                            value={service.unitPrice}
                            onChange={(e) => handleServiceChange(service.id, 'unitPrice', e.target.value)}
                            className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded"
                            placeholder="0.00"
                            min="0"
                            step="0.01"
                          />
                        </div>
                        <div>
                          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            GST Rate (%) *
                          </label>
                          <div className="flex gap-2">
                            <select
                              value={service.gstRate}
                              onChange={(e) => handleServiceChange(service.id, 'gstRate', e.target.value)}
                              className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded"
                            >
                              {gstOptions.map(rate => (
                                <option key={rate} value={rate}>{rate}%</option>
                              ))}
                            </select>
                            <input
                              type="number"
                              value={service.gstRate}
                              onChange={(e) => handleServiceChange(service.id, 'gstRate', e.target.value)}
                              className="w-20 px-2 py-2 text-xs md:text-sm border border-gray-300 rounded"
                              placeholder="Custom %"
                              min="0"
                              max="100"
                              step="0.1"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-3">
                          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                            Details
                          </label>
                          <textarea
                            value={service.details || ''}
                            onChange={(e) => handleServiceChange(service.id, 'details', e.target.value)}
                            className="w-full px-3 py-2 text-xs md:text-sm border border-gray-300 rounded"
                            rows="2"
                            placeholder="Service details (optional)"
                          />
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-xs md:text-sm text-gray-500">
                          Quantity: {service.quantity} | Unit Price: {formatCurrency(service.unitPrice)} | GST: {service.gstRate}%
                        </span>
                        <span className="text-xs md:text-sm font-semibold">
                          Amount: {formatCurrency(service.amount)}
                        </span>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addService}
                    className="w-full py-2 md:py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-gray-400 hover:text-gray-800 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                    Add Another Service
                  </button>
                </div>
              </div>

              {/* Bank Details Input Section */}
              <div className="mb-6 md:mb-8 p-4 md:p-6 rounded-xl border border-blue-200">
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Bank Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      value={bankInputs.bankName}
                      onChange={(e) => handleBankInputChange('bankName', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter bank name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Account Name
                    </label>
                    <input
                      type="text"
                      value={bankInputs.accountName}
                      onChange={(e) => handleBankInputChange('accountName', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter account name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={bankInputs.accountNumber}
                      onChange={(e) => handleBankInputChange('accountNumber', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter account number"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      value={bankInputs.ifscCode}
                      onChange={(e) => handleBankInputChange('ifscCode', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter IFSC code"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Branch Address
                    </label>
                    <textarea
                      value={bankInputs.branch}
                      onChange={(e) => handleBankInputChange('branch', e.target.value)}
                      className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows="2"
                      placeholder="Enter full branch address"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                <button
                  onClick={handleGenerate}
                  className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Generate Proposal
                </button>
              </div>
            </div>
          ) : (
            <div
              id="proposal"
              className="bg-white shadow-xl overflow-hidden mx-auto"
              style={{
                width: "794px",
                maxWidth: "794px",
              }}
            >

              {/* Print Controls */}
              <div className="bg-gradient-to-r from-gray-500 to-gray-800 p-3 md:p-4 flex flex-col sm:flex-row justify-between items-center gap-3 print:hidden">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <h1 className="text-lg md:text-xl font-bold text-white">Commercial Proposal</h1>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm md:text-base"
                  >
                    <Printer className="w-3 h-3 md:w-4 md:h-4" />
                    Print
                  </button>
                  <button
                    onClick={handleDownloadPDF}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm md:text-base"
                  >
                    <Download className="w-3 h-3 md:w-4 md:h-4" />
                    Download PDF
                  </button>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-3 py-1.5 md:px-4 md:py-2 border border-white text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm md:text-base"
                  >
                    Back
                  </button>
                </div>
              </div>

              {/* Main Content (Page 1) */}
              <div className="main-content avoid-break keep-together">
                {/* Proposal Content */}
                <div className="px-6 pb-8 md:pb-10 lg:pb-12 ">
                  {/* Header */}
                  <div className="mb-8 md:mb-10">
                    <div className="flex flex-col gap-8 md:gap-10">
                      {/* FIRST LINE: Logo + Proposal Title */}
                      <div className="flex  lg:flex-row justify-between content-center items-center  gap-6 md:gap-8">
                        {/* Logo */}
                        <div className="w-72 h-44 md:w-64 md:h-36 lg:w-96 lg:h-40 flex items-center justify-center">
                          <img
                            src={Logo}
                            alt="Company Logo"
                            className="w-full h-auto object-contain"
                          />
                        </div>

                        {/* Proposal Title */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-bold">Proposal</h1>
                      </div>

                      {/* SECOND LINE: Company Info + Table */}
                      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-10">
                        {/* LEFT: Company Info */}
                        <div className="w-full text-start text-gray-600">
                          <h3 className="font-semibold text-base md:text-xl lg:text-2xl mb-2">{companyInputs.name}</h3>
                          <div className="text-sm md:text-sm space-y-1">
                            <p>{companyInputs.address}</p>
                            <p>Phone: {companyInputs.phone}</p>
                          </div>
                        </div>

                        {/* RIGHT: Table */}
                        <div className="w-full lg:w-auto">
                          <div className="overflow-x-auto">
                            <table className="w-full max-w-[200px] ml-auto border border-gray-500">

                              <tbody>
                                <tr className="avoid-break">
                                  <td className="pl-4 md:pl-6 pr-2 md:pr-3 py-1 md:py-1.5 font-semibold border border-gray-500 bg-gray-100 text-left">
                                    Proposal Number
                                  </td>
                                  <td className="pl-4 md:pl-6 pr-2 md:pr-3 py-1 md:py-1.5 font-semibold border border-gray-500 bg-gray-100 text-left">
                                    Valid Till
                                  </td>
                                  <td className="pl-4 md:pl-6 pr-2 md:pr-3 py-1 md:py-1.5 font-semibold border border-gray-500 bg-gray-100 text-left">
                                    Date
                                  </td>
                                </tr>
                                <tr className="avoid-break">
                                  <td className="pl-2 md:pl-3 pr-2 md:pr-3 py-1 md:py-1.5 text-left border border-gray-500">
                                    {proposalInputs.proposalNumber}
                                  </td>
                                  <td className="pl-2 md:pl-3 pr-2 md:pr-3 py-1 md:py-1.5 text-left border border-gray-500">
                                    {proposalInputs.validTill}
                                  </td>
                                  <td className="pl-2 md:pl-3 pr-2 md:pr-3 py-1 md:py-1.5 text-left border border-gray-500">
                                    {proposalInputs.date}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Billed To */}
                    <div className="mt-8 md:mt-10 lg:mt-12 flex justify-between w-full">
                      <div className="flex flex-col text-start text-gray-600 gap-2 md:gap-3">
                        <h3 className="text-base md:text-lg font-semibold">Billed To</h3>
                        <p className="text-sm md:text-base font-medium avoid-break">{customerInputs.name}</p>
                        <p className="text-xs md:text-sm avoid-break">{customerInputs.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services Table */}
                  <div className="overflow-x-auto text-gray-700 mb-8 md:mb-10 avoid-break">
                    <table className="w-full border-collapse border border-gray-400 text-xs md:text-sm avoid-break">
                      <thead className="bg-gray-200 text-center">
                        <tr className="avoid-break">
                          <th className="border border-gray-300 px-3 md:px-4 py-3 md:py-4 lg:py-5 text-left w-[10%] avoid-break">Description</th>
                          <th className="border border-gray-300 px-2 md:px-4 py-3 md:py-4 lg:py-5 text-left w-[10%] avoid-break">HSN/SAC</th>
                          <th className="border border-gray-300 px-2 md:px-4 py-3 md:py-4 lg:py-5 text-left w-[10%] avoid-break">Quantity</th>
                          <th className="border border-gray-300 px-2 md:px-4 py-3 md:py-4 lg:py-5 text-left w-[12%]   avoid-break">Unit Price</th>

                          <th className="border border-gray-300 px-2 md:px-4 py-3 md:py-4 lg:py-5 text-left w-[15%]   avoid-break">Amount (INR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service, index) => (
                          <React.Fragment key={service.id}>
                            <tr className="hover:bg-gray-50 avoid-break">
                              <td className="border border-gray-300 px-3 md:px-4 py-3 md:py-4 lg:py-5 text-left font-medium avoid-break">{service.description}</td>
                              <td className="border border-gray-300 px-2 md:px-4 py-3 md:py-4 lg:py-5 text-center avoid-break">{service.hsnSac}</td>
                              <td className="border border-gray-300 px-2 md:px-4 py-3 md:py-4 lg:py-5 text-center avoid-break">{service.quantity}</td>
                              <td className="border border-gray-300 px-2 md:px-4 py-3 md:py-4 lg:py-5 text-right avoid-break">{formatCurrency(service.unitPrice)}</td>

                              <td className="border border-gray-300 px-2 md:px-4 py-3 md:py-4 lg:py-5 text-right font-semibold avoid-break">{formatCurrency(service.amount)}</td>
                            </tr>
                            {service.details && (
                              <tr className="avoid-break">
                                <td colSpan="6" className="border border-gray-300 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-600 bg-gray-50 avoid-break">
                                  <span className="font-medium">Details:</span> {service.details}
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tax Calculation */}
                  <div className="mb-8 md:mb-10 flex justify-end avoid-break">
                    <div className="overflow-x-auto w-full md:w-2/3 lg:w-1/2">
                      <table className="w-full md:w-full border-collapse text-xs md:text-sm avoid-break">
                        <tbody>
                          <tr className="avoid-break">
                            <td className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 font-semibold border border-gray-300 text-left w-[120px] md:w-[150px] avoid-break">
                              Sub Total
                            </td>
                            <td className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 text-right font-semibold border border-gray-300 w-[100px] md:w-[120px] avoid-break">
                              {formatCurrency(taxDetails.subTotal)}
                            </td>
                          </tr>
                          <tr className="avoid-break">
                            <td className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 border border-gray-300 text-left">
                              GST ({calculateEffectiveGstRate()}%)
                            </td>

                            <td className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 text-right border border-gray-300 avoid-break">
                              {formatCurrency(taxDetails.gst)}
                            </td>
                          </tr>
                          <tr className="avoid-break">
                            <td className="px-3 md:px-4 lg:px-5 py-2.5 md:py-3 font-bold text-gray-700 border border-gray-400 text-left text-sm md:text-base lg:text-lg w-[120px] md:w-[150px] avoid-break">
                              TOTAL AMOUNT
                            </td>
                            <td className="px-3 md:px-4 lg:px-5 py-2.5 md:py-3 text-right font-bold text-gray-700 border border-gray-400 text-sm md:text-base lg:text-lg w-[100px] md:w-[120px] avoid-break">
                              {formatCurrency(taxDetails.total)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page Break for Terms & Conditions (Page 2) */}
              <div id="terms-section" className="print-page-break avoid-break keep-together bg-white">
                <div className="px-6 pb-8 md:pb-10 lg:pb-12 pt-10 min-h-[1123px]" style={{ boxSizing: 'border-box' }}>
                  {/* Terms and Conditions */}
                  <div className="mb-8 md:mb-10 text-gray-500 text-xs md:text-sm text-start">
                    <h2 className="text-gray-400 font-semibold mb-3 text-base md:text-lg avoid-break">Terms and Conditions</h2>
                    <div className="rounded-lg space-y-3">
                      <p className="avoid-break"><span className="font-medium">Payment Methods:</span> Payment can be made by check, bank transfer, or credit card.</p>
                      <p className="avoid-break"><span className="font-medium">Billing Disputes:</span> If you have a dispute with any invoice, you must notify us within 10 days of receipt of the invoice. Failure to do so will result in the invoice being considered valid and payable in full.</p>
                      <p className="avoid-break"><span className="font-medium">Cancellation Policy:</span> If you cancel a project after completion, you will be responsible for paying the full amount of the invoice.</p>
                      <p className="avoid-break"><span className="font-medium">Intellectual Property Rights:</span> All intellectual property rights in any work performed by us will remain our property until full payment has been received. Upon receipt of full payment, you will be granted a license to use the work for the purpose for which it was created.</p>
                      <p className="avoid-break"><span className="font-medium">Confidentiality:</span> We will not disclose any confidential information that we receive from you in connection with any work performed, except as required by law.</p>
                    </div>
                  </div>

                  {/* Bank Details */}
                  <div className="mb-6 md:mb-8 text-gray-500">
                    <h2 className="text-start font-bold text-xs md:text-sm mb-3 md:mb-4 avoid-break">Bank Details</h2>
                    <div className="rounded-lg text-xs md:text-sm">
                      <div className="flex flex-col md:flex-row md:flex-start text-start gap-4 md:gap-5">
                        <div className="flex-1">
                          <p className="avoid-break"><span className="font-medium">Account Name:</span> {bankInputs.accountName}</p>
                          <p className="avoid-break"><span className="font-medium">Bank Name:</span> {bankInputs.bankName}</p>
                          <p className="avoid-break"><span className="font-medium">Account Number:</span> {bankInputs.accountNumber}</p>
                          <p className="avoid-break"><span className="font-medium">IFSC Code:</span> {bankInputs.ifscCode}</p>
                          <p className="mt-3 md:mt-4 avoid-break"><span className="font-medium">Address:</span> {bankInputs.branch}</p>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 mt-8 md:mt-10 text-end avoid-break">
                        This document is system-generated and does not require a signature
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Invoice;