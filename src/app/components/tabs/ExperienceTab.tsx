// src/app/components/tabs/ExperienceTab.tsx (Version Finale)
import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import { Badge } from '@/app/components/ui/Badge';

const experiences = [
    {
        role: "Linux System Administrator / DevOps",
        company: "ANID – TOGO",
        location: "Lomé, TOGO",
        logo: "/logos/anid.png", 
        date: "Sept. 2023 – Present",
        tasks: [
            "Managed VMware environment (vCenter, ESXi, snapshots, migration)",
            "Deployed and administered Kubernetes & OpenShift clusters",
            "Automated tasks with Ansible and Bash",
            "Monitored systems with Nagios, Prometheus and Grafana",
            "Managed backups with Veeam Backup",
            "Managed user access and integration with Keycloak",
            "Deployed containerized applications with Docker",
            "Managed CI/CD pipelines with Jenkins, Git, Terraform"
        ],
        tech: ["VMware", "Kubernetes", "OpenShift", "Ansible", "Jenkins", "Prometheus", "Grafana", "Docker", "Keycloak"]
    },
    {
        role: "Linux System Administrator",
        company: "ActioNet",
        location: "Virginia, USA",
        logo: "/logos/actionet.png", 
        date: "Aug 2019 – Aug 2023",
        tasks: [
            "Administered Linux servers (RedHat, CentOS, Ubuntu) on VMware and AWS",
            "Monitored via Zabbix, Nagios",
            "Installed and configured LAMP servers, Apache, NGINX",
            "Optimized web servers with Varnish",
            "Managed databases via PhpMyAdmin",
            "Automated tasks via Ansible (20% reduction in management time)",
            "Implemented Zabbix, ELK Stack (Elasticsearch, Logstash, Kibana)",
            "Provided Level 2 and 3 incident support"
        ],
        tech: ["Linux", "AWS", "Ansible", "Zabbix", "ELK Stack", "Apache", "Nginx", "MySQL"]
    }
];

export default function ExperienceTab() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-accent mb-8 text-center">Professionnal Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 sm:gap-6">
                        <div className="relative flex flex-col items-center">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-black/30 rounded-full border-2 border-border-color p-1">
                                <Image src={exp.logo} alt={`Logo ${exp.company}`} width={40} height={40} className="rounded-full object-contain" onError={(e) => { e.currentTarget.src = '/logos/default.svg'; }} />
                            </div>
                            {index < experiences.length - 1 && (
                                <div className="flex-grow w-px bg-border-color mt-4"></div>
                            )}
                        </div>
                        <div className="w-full">
                           <div className="flex justify-between items-start mb-1 flex-col sm:flex-row">
                               <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                               <time className="text-sm font-normal text-secondary sm:ml-4 flex-shrink-0">{exp.date}</time>
                           </div>
                           <p className="text-base text-secondary mb-3">{exp.company} - {exp.location}</p>
                           <ul className="list-disc list-inside space-y-1.5 text-secondary text-sm pl-2 mb-4">
                               {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
                           </ul>
                           <div className="flex flex-wrap gap-2">
                                {exp.tech.map((techItem) => (
                                    <Badge key={techItem} className="bg-gray-700/50 text-gray-300 border-gray-600">
                                        {techItem}
                                    </Badge>
                                ))}
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};