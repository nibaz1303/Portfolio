import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen, School } from "lucide-react"
import { SkillTag } from "@/components/skill-tag"
import { AnimatedSection } from "@/components/animated-section"
import { getCredentialsInfo } from "@/lib/data"

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo()

  // Fonction pour obtenir l'icône appropriée selon le diplôme
  const getEducationIcon = (degree: string) => {
    const lowerDegree = degree.toLowerCase()
    if (lowerDegree.includes('master')) {
      return <GraduationCap className="w-6 h-6 text-cyan-400" />
    } else if (lowerDegree.includes('licence') || lowerDegree.includes('bachelor')) {
      return <BookOpen className="w-6 h-6 text-blue-400" />
    } else if (lowerDegree.includes('baccalauréat') || lowerDegree.includes('bac')) {
      return <School className="w-6 h-6 text-green-400" />
    } else if (lowerDegree.includes('brevet')) {
      return <Award className="w-6 h-6 text-purple-400" />
    } else {
      return <GraduationCap className="w-6 h-6 text-cyan-400" />
    }
  }

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Credentials</h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Education */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-cyan-400" />
                Education
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {credentialsInfo.education.map((edu, index) => (
                  <div key={index} className="flex items-start bg-zinc-800/30 p-2 sm:p-3 rounded-lg">
                    <div className="w-10 h-10 rounded flex items-center justify-center mr-3 flex-shrink-0 bg-zinc-800/50">
                      {getEducationIcon(edu.degree)}
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">{edu.degree}</h5>
                      <p className="text-xs text-zinc-400">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills & Expertise */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {credentialsInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </CardContent>
    </Card>
  )
}
