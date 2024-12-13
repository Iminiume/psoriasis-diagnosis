import Button from "@/components/button";
import Input from "@/components/input";
import MultiSelect from "@/components/multi-select-input";
import Typography from "@/components/typography";
import React from "react";
import { Consts } from "../../consts";

function CommentModal({
  selectedDiagnosis,
  selectedDiagnosisType,
  setSelectedDiagnosisType,
  handleSubmitComment,
  comment,
  setComment,
  isVerifiedByDoctor,
  setIsVerifiedByDoctor,
}) {
  const diagnosisOptions = ["A", "B", "C"];

  return (
    <div className="flex min-w-[350px] flex-col gap-6">
      {selectedDiagnosis?.[1]?.Comments?.length > 0 ? (
        selectedDiagnosis[1].Comments.map((item, index) => (
          <div
            key={`comment-${index}`}
            className="rounded-xl bg-[#194CC2] p-4 text-white"
          >
            <Typography size="md">{Consts.doctorName + item.Name}</Typography>
            <Typography size="md">{Consts.comment + item.Comment}</Typography>
            {item.DoctorDiagnosis && (
              <Typography size="md">
                {Consts.diagnosisTypeByDoctor +
                  Consts.type +
                  " " +
                  item.DoctorDiagnosis}
              </Typography>
            )}
            <Typography size="md">
              {item.IsVerified
                ? Consts.doctorVerified
                : Consts.doctorDidnotVerified}
            </Typography>
          </div>
        ))
      ) : (
        <Typography size="md">{Consts.noComments}</Typography>
      )}

      <textarea
        className="w-full rounded border bg-inputBg p-2"
        placeholder={Consts.enterCommentHere}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <MultiSelect
        options={diagnosisOptions}
        value={selectedDiagnosisType}
        onChange={setSelectedDiagnosisType}
        placeholder={Consts.selectDiagnosisType}
      />

      <div className="flex items-center gap-2">
        <Input
          type="checkbox"
          checked={isVerifiedByDoctor}
          onChange={(e) => setIsVerifiedByDoctor(e.target.checked)}
        />
        <Typography size="md">{Consts.isVerified}</Typography>
      </div>

      <Button onClick={handleSubmitComment}>{Consts.addComment}</Button>
    </div>
  );
}

export default CommentModal;
