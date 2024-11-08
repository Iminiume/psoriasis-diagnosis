import SectionLayout from "@/view/dashboard/components/section-layout";
import React, { useEffect, useRef, useState } from "react";
import { Consts } from "./consts";
import Typography from "@/components/typography";
import Image from "@/components/image";
import Input from "@/components/input";
import DoctorAPI from "@/api/doctor";
import { useAuthContext } from "@/utils/context/useAuthContext";
import Modal from "@/components/modal";
import ModalContent from "@/view/dashboard/components/modal-content";
import { psoriazisType } from "@/utils/psoriazisType";

function PatientForm({ data, slug }) {
  const [patient, setPatient] = useState(null);
  const [comment, setComment] = useState("");
  const [isVerifiedByDoctor, setIsVerifiedByDoctor] = useState(null);
  const { state } = useAuthContext();
  const modalRef = useRef(null);

  const [{ data: addCommentData, error, loading }, refetch] =
    DoctorAPI.AddComment({
      token: state.token,
    });

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  useEffect(() => {
    const selectedPatient = data.find(
      (patient) => patient?.ID === Number(slug),
    );
    setPatient(selectedPatient || null);
  }, [data, slug]);

  useEffect(() => {
    setIsVerifiedByDoctor(patient?.IsVerifiedByDoctor);
  }, [patient]);

  useEffect(() => {
    if (addCommentData) handleModalOpen();
  }, [addCommentData]);

  const handleRadioChange = (value) => {
    setIsVerifiedByDoctor(value);
  };

  const handleSubmit = async () => {
    const payload = {
      patient_id: patient?.ID.toString(),
      is_verified_by_doctor: isVerifiedByDoctor === true,
      doctor_comment: comment,
    };
    refetch({ data: payload });
  };

  const Text = ({ title, text }) => {
    return (
      <div className="flex gap-2">
        <Typography size="lg">{title}</Typography>
        <Typography size="lg">{text}</Typography>
      </div>
    );
  };

  if (!patient) return null;

  return (
    <SectionLayout
      isButtonDisabled={loading || !comment}
      title={Consts.title}
      handleSubmit={handleSubmit}
      loading={loading}
    >
      <div className="flex h-full flex-col justify-between pb-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <Text title={Consts.firstName} text={patient?.FirstName} />
            <Text title={Consts.lastName} text={patient?.LastName} />
            <Text
              title={Consts.diseaseType}
              text={
                patient?.FormResult &&
                Consts.psoriasis + " " + psoriazisType(patient?.FormResult)
              }
            />
            <Text
              title={Consts.diseaseTypeBasedOnImage}
              text={
                patient?.ImageResult &&
                Consts.psoriasis + " " + psoriazisType(patient?.ImageResult)
              }
            />
            <Text
              title={Consts.status}
              text={
                patient?.IsVerifiedByDoctor
                  ? Consts.isVerified
                  : Consts.notVerified
              }
            />
          </div>

          {patient?.ImageUrl && (
            <div className="flex gap-2 rounded">
              <Image
                src={patient?.ImageUrl}
                width={400}
                height={200}
                className="rounded"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Typography size="lg" weight="bold">
              {Consts.isThisVerified}
            </Typography>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <Typography>{Consts.yes}</Typography>
                <Input
                  type="radio"
                  name="is_verified"
                  checked={isVerifiedByDoctor === true}
                  onChange={() => handleRadioChange(true)}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex gap-2">
                <Typography>{Consts.no}</Typography>
                <Input
                  type="radio"
                  name="is_verified"
                  checked={isVerifiedByDoctor === false}
                  onChange={() => handleRadioChange(false)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Typography size="lg" weight="bold">
              {Consts.addComment}
            </Typography>
            <textarea
              className="w-full rounded border border-[#465370] bg-[#252932] bg-none p-2 transition-colors focus:border-white focus:outline-none active:border-white"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={patient?.DoctorComment || Consts.enterCommentHere}
            />
          </div>
        </div>
      </div>

      <Modal ref={modalRef}>
        <ModalContent
          title={Consts.formModalCompleted}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </SectionLayout>
  );
}

export default PatientForm;
