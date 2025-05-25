import lungsIcon from "../assets/icons/lungs.png"
import teethIcon from "../assets/icons/teeth.png"
import boneIcon from "../assets/icons/bone.png"

const anatomyIndicators = [
  { id: 1, name: "Lungs", status: "issue", color: "red", position: { top: "35%", left: "45%" } },
  { id: 2, name: "Teeth", status: "healthy", color: "green", position: { top: "10%", left: "55%" } },
  { id: 3, name: "Bone", status: "issue", color: "red", position: { top: "65%", left: "50%" } },
];



const healthStatusCards = [
  { id: 1, title: "Lungs", date: "25 May 2025", status: "Needs Attention", icon: lungsIcon },
  { id: 2, title: "Teeth", date: "25 May 2025", status: "Healthy", icon: teethIcon },
  { id: 3, title: "Bone", date: "25 May 2025", status: "Needs Attention", icon: boneIcon },
];

export { anatomyIndicators, healthStatusCards };