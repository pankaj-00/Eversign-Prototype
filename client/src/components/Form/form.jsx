import { useState } from "react";
import SignaturePad from "react-signature-canvas";
import { sendEmail } from "../../utils/sendEmail";
import "./form.scss";

const Form = () => {
  const [sigPad, setSigPad] = useState({});
  const [sign, setSign] = useState(null);
  const clear = () => {
    sigPad.clear();
  };

  const submit = async () => {
    setSign(sigPad.getTrimmedCanvas().toDataURL("image/png"));
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sign: sigPad.getTrimmedCanvas().toDataURL("image/png"),
      }),
    };
    await fetch("http://localhost:200/user", params);
    const expiryDate = Date.now() + 3 * 24 * 3600000;
    const templateParams = {
      sign: sigPad.getTrimmedCanvas().toDataURL("image/png"),
      expiresOn: new Date(expiryDate),
    };
    await sendEmail(
      "service_lrmevbg",
      "template_s7jwmbu",
      templateParams,
      "WD8auzSuTbTqaXmKb"
    );
    // location.reload();
  };
  return (
    <div className="form">
      <SignaturePad
        canvasProps={{ width: 500, height: 300, className: "sigPad" }}
        ref={(ref) => {
          setSigPad(ref);
        }}
      />
      <div className="buttons">
        <button onClick={clear} className="button">
          Clear
        </button>
        <button onClick={submit} className="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
