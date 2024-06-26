import Image from "next/image";
import {useState} from "react";

const members = [
    {
        name: "enzo",
        phone: "+33 6 01 00 91 90"
    },
    {
        name: "diego",
        phone: "+33 6 11 34 76 10"
    },
    {
        name: "timothee",
        phone: "+33 6 89 65 50 88",
    }
]

function Call(props: any) {
    const {onClick} = props;
    return(
        <button onClick={onClick} className={"flex items-center gap-[25px] h-[57px] px-[25px]"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <mask id="mask0_230_726" maskUnits="userSpaceOnUse" x="0" y="0" width="25"
                      height="24">
                    <rect x="0.0249023" width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_230_726)">
                    <path
                        d="M12.0247 7C11.7414 7 11.5039 6.90417 11.3122 6.7125C11.1205 6.52083 11.0247 6.28333 11.0247 6V3C11.0247 2.71667 11.1205 2.47917 11.3122 2.2875C11.5039 2.09583 11.7414 2 12.0247 2C12.308 2 12.5455 2.09583 12.7372 2.2875C12.9289 2.47917 13.0247 2.71667 13.0247 3V6C13.0247 6.28333 12.9289 6.52083 12.7372 6.7125C12.5455 6.90417 12.308 7 12.0247 7ZM16.9247 9.1C16.7414 8.9 16.6455 8.66667 16.6372 8.4C16.6289 8.13333 16.7247 7.9 16.9247 7.7L19.0497 5.575C19.2497 5.375 19.4872 5.27917 19.7622 5.2875C20.0372 5.29583 20.2747 5.4 20.4747 5.6C20.658 5.8 20.7539 6.03333 20.7622 6.3C20.7705 6.56667 20.6747 6.8 20.4747 7L18.3497 9.125C18.1497 9.325 17.9122 9.42083 17.6372 9.4125C17.3622 9.40417 17.1247 9.3 16.9247 9.1ZM7.12471 9.1C6.92471 9.3 6.68721 9.40417 6.41221 9.4125C6.13721 9.42083 5.89971 9.325 5.69971 9.125L3.57471 7C3.37471 6.8 3.27887 6.56667 3.28721 6.3C3.29554 6.03333 3.39137 5.8 3.57471 5.6C3.77471 5.4 4.01221 5.29583 4.28721 5.2875C4.56221 5.27917 4.79971 5.375 4.99971 5.575L7.12471 7.7C7.32471 7.9 7.42054 8.13333 7.41221 8.4C7.40387 8.66667 7.30804 8.9 7.12471 9.1ZM3.42471 20.4L1.12471 18.15C0.924707 17.95 0.824707 17.7167 0.824707 17.45C0.824707 17.1833 0.924707 16.95 1.12471 16.75C2.59137 15.1667 4.28304 13.9792 6.19971 13.1875C8.11637 12.3958 10.058 12 12.0247 12C13.9914 12 15.9289 12.3958 17.8372 13.1875C19.7455 13.9792 21.4414 15.1667 22.9247 16.75C23.1247 16.95 23.2247 17.1833 23.2247 17.45C23.2247 17.7167 23.1247 17.95 22.9247 18.15L20.6247 20.4C20.4414 20.5833 20.2289 20.6833 19.9872 20.7C19.7455 20.7167 19.5247 20.65 19.3247 20.5L16.4247 18.3C16.2914 18.2 16.1914 18.0833 16.1247 17.95C16.058 17.8167 16.0247 17.6667 16.0247 17.5V14.65C15.3914 14.45 14.7414 14.2917 14.0747 14.175C13.408 14.0583 12.7247 14 12.0247 14C11.3247 14 10.6414 14.0583 9.97471 14.175C9.30804 14.2917 8.65804 14.45 8.02471 14.65V17.5C8.02471 17.6667 7.99137 17.8167 7.92471 17.95C7.85804 18.0833 7.75804 18.2 7.62471 18.3L4.72471 20.5C4.52471 20.65 4.30387 20.7167 4.06221 20.7C3.82054 20.6833 3.60804 20.5833 3.42471 20.4ZM6.02471 15.35C5.54137 15.6 5.07471 15.8875 4.62471 16.2125C4.17471 16.5375 3.70804 16.9 3.22471 17.3L4.22471 18.3L6.02471 16.9V15.35ZM18.0247 15.4V16.9L19.8247 18.3L20.8247 17.35C20.3414 16.9167 19.8747 16.5417 19.4247 16.225C18.9747 15.9083 18.508 15.6333 18.0247 15.4Z"
                        fill="#1C1B1F"/>
                </g>
            </svg>
            Call me baby
        </button>
    )
}

function Who(props: any) {
    const {test} = props;
    return (
        <div className={"flex gap-[25px] items-center h-[57px] px-[25px]"}>
            <p>Who ?</p>
            <div className="flex ml-[6px]">
                {members.map((member, index) => (
                    <button key={member.name} onClick={() => {
                        props.setSelectedMember(member);
                        test(2);
                    }}>
                        <Image src={`/profile/${member.name}.png`} width={30} height={30}
                               alt={member.name}
                               className={`ml-[-6px]`}/>
                    </button>
                ))}
            </div>
        </div>
    )
}

function Phone(props: any) {
    const {member, onClick} = props;
    return (
        <button className={"flex gap-3 items-center h-[57px] px-[25px]"} onClick={onClick}>
            <Image src={`/profile/${member.name}.png`} width={30} height={30}
                   alt={member.name}
                   className={`ml-[-6px]`}/>
            <a href={`tel:+${member.phone}`} className={"hover:text-blue-500"}>{member.phone}</a>
        </button>
    )
}


export default function ButtonCallMeBaby() {
    const [selectedMember, setSelectedMember] = useState(members[0]);
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <div className="group absolute bg-white shadow-md rounded-full right-[20%] top-[53%]">
            <div className="whitespace-nowrap">
                {currentStep === 0 && <Call onClick={()=> setCurrentStep(1)} />}
                {currentStep === 1 && <Who test={setCurrentStep} setSelectedMember={setSelectedMember} />}
                {currentStep === 2 && <Phone member={selectedMember} onClick={()=> setCurrentStep(0)} />}
            </div>
        </div>
    )
}