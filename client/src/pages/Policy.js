import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
            height={280}
          />
        </div>
        <div className="col-md-4">
          <p>
            {" "}
            For purposes of this Privacy Policy, "Your Information" or "Personal
            Data" means information about you, which may be of a confidential or
            sensitive nature and may include personally identifiable information
            ("PII") and/or financial information. PII means individually
            identifiable information that would allow us to determine the actual
            identity of a specific living person, while sensitive data may
            include information, comments, content and other information that
            you voluntarily provide.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
