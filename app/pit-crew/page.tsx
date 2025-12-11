import Head from 'next/head'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Linkedin, Mail, Cpu, Car, Wind, Radio, Megaphone, Settings, Users, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: 'The Pit Crew - Team ETA',
  description: 'Meet the engineers behind the mileage',
}

const teamData = {
  core: {
    title: 'Core Team',
    icon: Users,
    color: "text-primary",
    members: [
      { 
        name: 'Mohd Suhail Shanavas', 
        role: 'Team Manager', 
        dept: 'Core',
        email: null,
        linkedin: null,
        isHead: true
      },
      { 
        name: 'Avanti Biswas', 
        role: 'Team Admin', 
        dept: 'Core',
        email: 'avanti.biswas@somaiya.edu',
        linkedin: 'https://www.linkedin.com/in/avanti-biswas-a13387278',
        isHead: true
      },
      { 
        name: 'Shubham Mishra', 
        role: 'Technical Coordinator', 
        dept: 'Core',
        email: 'shubham.mishra@somaiya.edu',
        linkedin: null,
        isHead: true
      }
    ]
  },
  teamMembers: {
    electronics: {
      title: 'Electronics',
      icon: Cpu,
      color: "text-cyan-400",
      members: [
        { 
          name: 'Avanti Biswas', 
          role: 'Head', 
          dept: 'Electronics',
          email: 'avanti.biswas@somaiya.edu',
          linkedin: 'https://www.linkedin.com/in/avanti-biswas-a13387278',
          isHead: true
        },
        { 
          name: 'Shefali Govind', 
          role: 'Head', 
          dept: 'Electronics',
          email: 'shefali.govind@somaiya.edu',
          linkedin: 'http://www.linkedin.com/in/shefali-govind-123578273',
          isHead: true
        },
        { name: 'Aditya Chaugala', role: 'Member', dept: 'Electronics', email: 'aditya.chaugala@somaiya.edu', linkedin: 'http://www.linkedin.com/in/aditya-chaugala-683032321' },
        { name: 'Sukrut Patil', role: 'Member', dept: 'Electronics', email: 'sukrut.patil@somaiya.edu', linkedin: 'www.linkedin.com/in/sukrut-patil-78915a359' },
        { name: 'Jaanavee Tendulkar', role: 'Member', dept: 'Electronics', email: 'jaanavee.t@somaiya.edu', linkedin: 'https://www.linkedin.com/in/jaanavee-tendulkar-43684b312' },
        { name: 'Shivakshi Mishra', role: 'Member', dept: 'Electronics', email: 'shivakshi.m@somaiya.edu', linkedin: 'https://www.linkedin.com/in/shivakshi-mishra-710734391' },
        { name: 'Gargi Pawar', role: 'Member', dept: 'Electronics', email: null, linkedin: null },
        { name: 'Shubhra Sawant', role: 'Member', dept: 'Electronics', email: 'shubhra11@somaiya.edu', linkedin: 'https://www.linkedin.com/in/shubhra-sawant-451a1b382' },
        { name: 'Yash Garg', role: 'Member', dept: 'Electronics', email: 'yash.garg@somaiya.edu', linkedin: 'linkedin.com/in/yash-garg-7a3945383' },
        { name: 'Derrick Lewis', role: 'Member', dept: 'Electronics', email: 'derrick.l@somaiya.edu', linkedin: 'www.linkedin.com/in/derrick-lewis-264890375' },
        { name: 'Aryan Choudhary', role: 'Member', dept: 'Electronics', email: 'aryan.choudhary@somaiya.edu', linkedin: 'www.linkedin.com/in/aryan-choudhary-5827b8239' },
        { name: 'Devesh Kumar', role: 'Member', dept: 'Electronics', email: 'surendra.k@somaiya.edu', linkedin: 'https://www.linkedin.com/in/devesh-k-maurya' },
        { name: 'Adwait Parwekar', role: 'Member', dept: 'Electronics', email: 'adwait.parwekar@somaiya.edu', linkedin: 'https://www.linkedin.com/in/adwait-parwekar-540bb5395' }
      ]
    },
    vehicleDynamics: {
      title: 'Vehicle Dynamics',
      icon: Car,
      color: "text-orange-400",
      members: [
        { 
          name: 'Shubham Mishra', 
          role: 'Head', 
          dept: 'Vehicle Dynamics',
          email: 'shubham.mishra@somaiya.edu',
          linkedin: null,
          isHead: true
        },
        { name: 'Neev Keswani', role: 'Member', dept: 'Vehicle Dynamics', email: 'neev.keswani@somaiya.edu', linkedin: 'https://www.linkedin.com/in/neev-keswani-930169399' },
        { name: 'Manthan Belekar', role: 'Member', dept: 'Vehicle Dynamics', email: 'manthan.belekar@somaiya.edu', linkedin: 'https://www.linkedin.com/in/manthan-belekar-787a73310/' },
        { name: 'Rajat Tamboli', role: 'Member', dept: 'Vehicle Dynamics', email: 'rajat.tamboli@somaiya.edu', linkedin: 'https://www.linkedin.com/in/rajat-tamboli' },
        { name: 'Aditya Jawalkar', role: 'Member', dept: 'Vehicle Dynamics', email: 'aditya.jawalkar@somaiya.edu', linkedin: 'https://www.linkedin.com/in/aditya-jawalkar-76b230361/' },
        { name: 'Sanvi Raut', role: 'Member', dept: 'Vehicle Dynamics', email: 'sanvi.raut@somaiya.edu', linkedin: 'https://www.linkedin.com/in/SanviRaut' }
      ]
    },
    bodyworks: {
      title: 'Bodyworks',
      icon: Wind,
      color: "text-purple-400",
      members: [
        { name: 'Aryan Dere', role: 'Head', dept: 'Bodyworks', email: 'aryan.dere@somaiya.edu', linkedin: null },
        { name: 'Yadnesh Kadam', role: 'Member', dept: 'Bodyworks', email: 'yadnesh.ak@somaiya.edu', linkedin: 'www.linkedin.com/in/yadneshkadam' },
        { name: 'Shreehari Karandikar', role: 'Member', dept: 'Bodyworks', email: 'shreehari.k@somaiya.edu', linkedin: 'https://www.linkedin.com/in/shreehari-karandikar-aa66a325b' },
        { name: 'Deepansh Mehra', role: 'Member', dept: 'Bodyworks', email: 'deepansh.mehra@somaiya.edu', linkedin: 'https://www.linkedin.com/in/deepansh-mehra-1a3513325/' }
      ]
    },
    autonomous: {
      title: 'Autonomous',
      icon: Radio,
      color: "text-green-400",
      members: [
        { 
          name: 'Ashvatth Joshi', 
          role: 'Head', 
          dept: 'Autonomous',
          email: 'ashvatth.j@somaiya.edu',
          linkedin: 'https://www.linkedin.com/in/ashvatth-joshi/',
          isHead: true
        },
        { name: 'Keshav Mallawat', role: 'Member', dept: 'Autonomous', email: 'keshav.mallawat@somaiya.edu', linkedin: 'https://www.linkedin.com/in/keshav-mallawat' },
        { name: 'Kritarth Shankar', role: 'Member', dept: 'Autonomous', email: 'kritarth.s@somaiya.edu', linkedin: 'https://www.linkedin.com/in/0ptr' },
        { name: 'Gandharva Ugale', role: 'Member', dept: 'Autonomous', email: 'gandharva.u@somaiya.edu', linkedin: 'https://www.linkedin.com/in/gandharvaugale/' },
        { name: 'Aswin Nambiar', role: 'Member', dept: 'Autonomous', email: 'aswin.nambiar@somaiya.edu', linkedin: 'www.linkedin.com/in/aswin-nambiar-67479b301' },
        { name: 'Ashish Kumar', role: 'Member', dept: 'Autonomous', email: 'ashish19@somaiya.edu', linkedin: 'https://www.linkedin.com/in/ashish-kumar-sentiashish/' },
        { name: 'Bhoumik Sangle', role: 'Member', dept: 'Autonomous', email: 'bhoumik.s@somaiya.edu', linkedin: null },
        { name: 'Akhil Tyagi', role: 'Member', dept: 'Autonomous', email: 'akhil.tyagi@somaiya.edu', linkedin: 'https://www.linkedin.com/in/akh1l1202/'}
      ]
    },
    marketing: {
      title: 'Marketing',
      icon: Megaphone,
      color: "text-yellow-400",
      members: [
        { name: 'Tanishq Dhawrani', role: 'Head', dept: 'Marketing', email: 'tanishq.dhawrani@somaiya.edu', linkedin: 'https://www.linkedin.com/in/tanishqdhawrani' },
        { name: 'Aryan Gaikwad', role: 'Member', dept: 'Marketing', email: 'asg3@somaiya.edu', linkedin: 'https://www.linkedin.com/in/aryan-gaikwad-14a752328' },
        { name: 'Aayush Sawant', role: 'Member', dept: 'Marketing', email: 'as44@somaiya.edu', linkedin: 'https://www.linkedin.com/in/aayush-sawant' },
        { name: 'Ahinsa Bothra', role: 'Member', dept: 'Marketing', email: 'ahinsa.b@somaiya.edu', linkedin: 'https://www.linkedin.com/in/ahinsa-bothra' },
        { name: 'YUVRAJ MARWAHA', role: 'Member', dept: 'Marketing', email: 'yuvraj.marwaha@somaiya.edu', linkedin: 'https://www.linkedin.com/in/yuvraj-marwaha-323218328/' }
      ]
    },
    drivetrain: {
      title: 'Drivetrain',
      icon: Settings,
      color: "text-indigo-400",
      members: [
        { 
          name: 'Sidharth Sankar', 
          role: 'Head', 
          dept: 'Drivetrain',
          email: 'sidharth.sankar@somaiya.edu',
          linkedin: 'https://www.linkedin.com/in/sidharth-sankar-a07b04321',
          isHead: true
        },
        { 
          name: 'Sanat Phulkar', 
          role: 'Head', 
          dept: 'Drivetrain',
          email: 'sanat.phulkar@somiaya.edu',
          linkedin: 'www.linkedin.com/in/sanat-phulkar',
          isHead: true
        },
        { name: 'Eshaan Manamkeri', role: 'Member', dept: 'Drivetrain', email: 'eshaan.m@somaiya.edu', linkedin: null }
      ]
    }
  }
}

const formatName = (name: string) => {
  return name.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
};

const renderMemberCard = (member: any, teamColor = "text-primary", compact = false) => {
  const initials = member.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <Card
      key={member.name}
      className={`bg-card/40 backdrop-blur-md border-primary/10 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden ${
        member.isHead ? 'ring-1 ring-primary/30' : ''
      }`}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {member.isHead && (
        <div className="absolute top-0 right-0 z-20">
            <div className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-bl-lg shadow-lg">
                HEAD
            </div>
        </div>
      )}

      <CardContent className={`p-4 flex ${compact ? 'flex-row items-center gap-4' : 'flex-col items-center'} relative z-10`}>
        {/* Avatar */}
        <div className={`${compact ? 'w-12 h-12 text-lg' : 'w-20 h-20 mb-3 text-2xl'} rounded-xl bg-background/50 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-300 relative overflow-hidden flex-shrink-0`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <span className={`font-black ${teamColor} tracking-tighter`}>
                {initials}
            </span>
        </div>

        <div className={`flex-1 ${compact ? 'text-left' : 'text-center w-full'}`}>
            <h3 className={`${compact ? 'text-base' : 'text-lg'} font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1`}>
            {formatName(member.name)}
            </h3>
            
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                {member.role}
            </p>

            <div className={`flex ${compact ? 'justify-start' : 'justify-center'} gap-2`}>
            {member.email && (
                <a 
                href={`mailto:${member.email}`} 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Email ${member.name}`}
                >
                <Mail className="w-3.5 h-3.5" />
                </a>
            )}
            {member.linkedin && (
                <a 
                href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
                >
                <Linkedin className="w-3.5 h-3.5" />
                </a>
            )}
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function PitCrewPage() {
  return (
    <main className="bg-background min-h-screen relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none fixed" />
      
      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-pulse">
            <Users className="w-4 h-4" />
            <span>Team Roster 2025</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground uppercase">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600">Pit Crew</span>
          </h1>
        </div>

        {/* Core Team - The "Pit Wall" */}
        <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold text-foreground uppercase tracking-widest">Team Leadership</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamData.core.members.map(member => renderMemberCard(member, teamData.core.color))}
            </div>
        </div>

        {/* Departments Tabs */}
        <Tabs defaultValue="electronics" className="w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-1 bg-cyan-400 rounded-full" />
                    <h2 className="text-2xl font-bold text-foreground uppercase tracking-widest">Departments</h2>
                </div>
                <TabsList className="bg-muted/50 p-1 h-auto flex-wrap justify-start">
                    {Object.entries(teamData.teamMembers).map(([key, team]) => (
                        <TabsTrigger 
                            key={key} 
                            value={key}
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 uppercase text-xs font-bold tracking-wider"
                        >
                            {team.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>

            {Object.entries(teamData.teamMembers).map(([key, team]) => (
                <TabsContent key={key} value={key} className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {team.members.map(member => renderMemberCard(member, team.color, true))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>

      </section>

      <Footer />
    </main>
  )
}
