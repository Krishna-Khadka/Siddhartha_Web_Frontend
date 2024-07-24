export default function Admission() {
  return (
    <>
      <div>
        {/* eligibility div */}
        <h5 className="capitalize text-xl sm:text-xl lg:text-2xl font-extrabold tracking-wider">
          Eligibility
        </h5>
        <p className="text-base sm:text-base md:text-base lg:text-lg tracking-wider text-[#606060] pt-2">
          Applicants need at least GPA 2.0 or Equivalent Grades in SEE /
          Equivalent level exams for enrolment in Management. Applicants must
          fulfill the NEB's subject-specific grade requirements.
        </p>
      </div>

      {/* applicationForm div  */}
      <div className="py-4">
        <h5 className="capitalize text-xl sm:text-xl lg:text-2xl font-extrabold tracking-wider">
          Application Forms
        </h5>
        <p className="text-base sm:text-base md:text-base lg:text-lg tracking-wider text-[#606060] pt-2">
          Application forms are available at Siddhartha Higher Secondary School
          office. Applicants should submit these forms duly filled in with all
          supporting documents by the given deadline.
        </p>
      </div>

      {/* entranceTest div  */}
      <div className="py-4">
        <h5 className="capitalize text-xl sm:text-xl lg:text-2xl font-extrabold tracking-wider">
          Entrance Test
        </h5>
        <p className="text-base sm:text-base md:text-base lg:text-lg tracking-wider text-[#606060] pt-2">
          Getting through this Test is mandatory for your admission. The
          Entrance Test appropriately assesses the examinee in areas related to
          the choice of course - Computer Science, Hotel Management, Business
          Studies, Law. We provide Sample Test Papers to the student applicants
          after form submission in order to prepare themselves for this
          competitive entry exam.
        </p>
      </div>

      {/* result div  */}
      <div className="py-4">
        <h5 className="capitalize text-xl sm:text-xl lg:text-2xl font-extrabold tracking-wider">
          result
        </h5>
        <p className="text-base sm:text-base md:text-base lg:text-lg tracking-wider text-[#606060] pt-2">
          The results of the Entrance Test are strictly based on the order of
          merit. The names of the selected student applicants are posted on the
          College website and also pasted on the College Notice Board.
        </p>
      </div>

      {/* scholarship div */}
      <div className="py-4">
        <h5 className="capitalize text-xl sm:text-xl lg:text-2xl font-extrabold tracking-wider">
          Scholarship
        </h5>
        <p className="text-base sm:text-base md:text-base lg:text-lg tracking-wider text-[#606060] pt-2">
          Siddhartha +2 Scholarships are awarded to exceptional students in
          order to recognize and promote academic excellence. There are many
          Scholarships for commendable students who satisfy expected norms.
        </p>
      </div>
    </>
  );
}
