import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  BriefcaseBusiness,
} from "lucide-react";
import { skills } from "../constants/skills";

export function Sidebar() {
  return (
    <div className="bg-[#0082E6] text-white p-4 lg:p-8 print:p-8 space-y-8 sidebar">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">JONATHAN PEÑA</h1>
        <h2 className="text-xl text-gray-100 tracking-wider">
          FULL STACK DEVELOPER
        </h2>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold tracking-wider">CONTACT</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="text-white/80" size={18} />
            <span className="text-sm">Madrid, Spain</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-white/80" size={18} />
            <span className="text-sm">+34 614 374 632</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-white/80" size={18} />
            <span className="text-sm">granj215@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Github className="text-white/80" size={18} />
            <a
              target="_blank"
              href="https://github.com/jonpena"
              className="text-sm hover:text-white/70 transition-colors"
            >
              github.com/jonpena
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="text-white/80" size={18} />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jonpe%C3%B1a"
              className="text-sm hover:text-white/70 transition-colors"
            >
              https://www.linkedin.com/in/jonpeña
            </a>
          </div>
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="text-white/80" size={18} />
            <a
              target="_blank"
              href="https://jonpena.github.io/"
              className="text-sm hover:text-white/70 transition-colors"
            >
              https://jonpena.github.io
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold tracking-wider">SKILLS</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-gray-100 text-sm mb-2">Technical</h4>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#0066B8] text-sm rounded-full hover:bg-[#005299] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-gray-100 text-sm mb-2">Soft</h4>
            <div className="flex flex-wrap gap-2">
              {skills.softs.map((soft) => (
                <span
                  key={soft}
                  className="px-3 py-1 bg-[#0066B8] text-sm rounded-full hover:bg-[#005299] transition-colors"
                >
                  {soft}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
