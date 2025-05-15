"use strict";
exports.id = 7224;
exports.ids = [7224];
exports.modules = {

/***/ 87224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HAL900BookingForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 144 modules
var proxy = __webpack_require__(23694);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(12019);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(17367);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(29256);
;// CONCATENATED MODULE: ./src/components/ui/textarea.tsx



const Textarea = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
        className: (0,utils.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";


// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(9941);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(5705);
// EXTERNAL MODULE: ./node_modules/react-phone-number-input/min/index.js + 79 modules
var min = __webpack_require__(19052);
// EXTERNAL MODULE: ./node_modules/react-phone-number-input/style.css
var style = __webpack_require__(19604);
;// CONCATENATED MODULE: ./src/components/HAL900-BookingForm.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










// Custom styles for react-phone-number-input
const phoneInputCustomStyles = `
  .PhoneInputInput {
    background-color: transparent !important;
    border: none !important;
    color: white !important;
    height: 100%;
    font-size: inherit;
    outline: none !important;
    box-shadow: none !important;
  }
  .PhoneInputInput::placeholder {
    color: #6b7280; /* gray-500 */
  }
  .PhoneInputCountrySelect {
    /* You can add custom styles for the country select dropdown arrow or container if needed */
  }
  .PhoneInputCountryIcon--border {
    box-shadow: none !important; /* Remove default border shadow if any */
  }
`;
function HAL900BookingForm({ selectedDate, selectedTime, onClose, onSubmit }) {
    const [formData, setFormData] = (0,react_.useState)({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        additionalInfo: ""
    });
    const [loading, setLoading] = (0,react_.useState)(false);
    const [isPhoneValid, setIsPhoneValid] = (0,react_.useState)(true); // New state for phone validity
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        // Directly show a loading toast
        const toastId = dist.toast.loading("Scheduling your strategy session...");
        try {
            await onSubmit(formData);
            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                additionalInfo: ""
            });
            // Update the loading toast to success
            dist.toast.success("Strategy session confirmed! A confirmation email has been sent to your inbox.", {
                id: toastId,
                duration: 5000
            });
            // Close the form after a short delay
            setTimeout(()=>{
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Submission error:", error);
            // Update the loading toast to error
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            dist.toast.error(`There was an issue with your booking: ${errorMessage}`, {
                id: toastId,
                duration: 5000
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dist.Toaster, {
                position: "top-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                children: phoneInputCustomStyles
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(proxy/* motion */.E.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 20
                },
                className: "bg-scailer-light rounded-xl p-6 shadow-lg max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-2xl font-bold text-white mb-6",
                        children: "Enter Details"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                htmlFor: "firstName",
                                                className: "text-sm text-white/80",
                                                children: [
                                                    "First Name ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-scailer-green",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                                id: "firstName",
                                                required: true,
                                                value: formData.firstName,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            firstName: e.target.value
                                                        })),
                                                className: (0,utils.cn)("bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500", "focus:ring-1 focus:ring-scailer-green/50")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                htmlFor: "lastName",
                                                className: "text-sm text-white/80",
                                                children: [
                                                    "Last Name ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-scailer-green",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                                id: "lastName",
                                                required: true,
                                                value: formData.lastName,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            lastName: e.target.value
                                                        })),
                                                className: (0,utils.cn)("bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500", "focus:ring-1 focus:ring-scailer-green/50")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "phone",
                                                className: "text-sm text-white/80",
                                                children: "Phone"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (0,utils.cn)("relative bg-[#2a2a2a] rounded-md text-white placeholder:text-gray-500", "flex items-center h-10", "focus-within:ring-1 focus-within:ring-scailer-green/50", !isPhoneValid && formData.phone ? "ring-1 ring-red-500" : ""),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(min/* default */.ZP, {
                                                    international: true,
                                                    defaultCountry: "GB",
                                                    value: formData.phone,
                                                    onChange: (value)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                phone: value || ""
                                                            }));
                                                        setIsPhoneValid(value ? (0,min/* isValidPhoneNumber */.yf)(value) : true);
                                                    },
                                                    className: "custom-phone-input"
                                                })
                                            }),
                                            !isPhoneValid && formData.phone && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs text-red-500 mt-1",
                                                children: "Please enter a valid phone number."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                htmlFor: "email",
                                                className: "text-sm text-white/80",
                                                children: [
                                                    "Email ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-scailer-green",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                                id: "email",
                                                required: true,
                                                type: "email",
                                                value: formData.email,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            email: e.target.value
                                                        })),
                                                className: (0,utils.cn)("bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500", "focus:ring-1 focus:ring-scailer-green/50")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "additionalInfo",
                                        className: "text-sm text-white/80",
                                        children: "Additional Information"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Textarea, {
                                        id: "additionalInfo",
                                        placeholder: "Is there anything you would like us to know before your appointment?",
                                        value: formData.additionalInfo,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    additionalInfo: e.target.value
                                                })),
                                        className: (0,utils.cn)("min-h-[100px] bg-[#2a2a2a] border-0 text-white placeholder:text-gray-500", "focus:ring-1 focus:ring-scailer-green/50")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-end gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                        type: "button",
                                        onClick: onClose,
                                        className: "bg-transparent border border-scailer-green text-scailer-green hover:bg-scailer-green/10 py-2 px-5 text-base font-medium h-12",
                                        disabled: loading,
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                        type: "submit",
                                        disabled: loading,
                                        className: (0,utils.cn)("bg-scailer-green text-white", "hover:bg-scailer-green/90", "disabled:opacity-50 disabled:cursor-not-allowed", "py-2 px-5 text-base font-medium h-12"),
                                        children: loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(loader_circle/* default */.Z, {
                                                    className: "mr-2 h-5 w-5 animate-spin"
                                                }),
                                                "Scheduling..."
                                            ]
                                        }) : "Schedule Session"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;