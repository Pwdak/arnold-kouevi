"use client";

import { Mail, Phone, MapPin, Linkedin, Download, Printer } from 'lucide-react';

export default function ResumeTab() {
    return (
        <div className="resume-container w-full max-w-4xl mx-auto bg-white text-black p-8 md:p-12 shadow-2xl rounded-lg font-sans">
            {/* --- Header --- */}
            <header className="border-b-2 border-gray-800 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-gray-900">Arnold KOUEVI</h1>
                    <p className="text-xl md:text-2xl text-blue-600 font-medium mt-2">Linux System Administrator | DevOps Engineer</p>
                </div>
                <div className="text-sm md:text-base space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-600" />
                        <span>Lomé, TOGO</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={16} className="text-blue-600" />
                        <a href="mailto:koueviarnold@gmail.com" className="hover:underline">koueviarnold@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={16} className="text-blue-600" />
                        <span>+228 92 19 66 55</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Linkedin size={16} className="text-blue-600" />
                        <a href="https://linkedin.com/in/arnold-kouevi" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/arnold-kouevi</a>
                    </div>
                </div>
            </header>

            {/* Affichage CV-style (retour à la version précédente) */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* --- Left Column (Main Content) --- */}
                <div className="md:col-span-2 space-y-10">
                    
                    {/* Professional Summary */}
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-blue-700 border-b border-gray-300 pb-2 mb-4">Professional Summary</h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Passionate and certified Linux System Administrator with over 6 years of experience in DevOps engineering. 
                            Specialized in managing on-premise and cloud (AWS) infrastructures, virtualization (VMware), containerization (Docker, Kubernetes), 
                            and automation (Ansible, Jenkins). Proven track record of optimizing systems, reducing management time through automation, 
                            and ensuring high availability and security of critical environments.
                        </p>
                    </section>

                    {/* Work Experience */}
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-blue-700 border-b border-gray-300 pb-2 mb-6">Work Experience</h2>
                        
                        <div className="space-y-8">
                            {/* ANID */}
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-lg font-bold text-gray-900">Linux System Administrator / DevOps</h3>
                                    <span className="text-sm font-medium text-gray-500 italic">Sept. 2023 – Present</span>
                                </div>
                                <div className="text-blue-600 font-medium mb-2">ANID – Lomé, TOGO</div>
                                <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 text-sm">
                                    <li>Managed VMware environment (vCenter, ESXi, snapshots, migration).</li>
                                    <li>Deployed and administered Kubernetes & OpenShift clusters.</li>
                                    <li>Automated infrastructure tasks with Ansible and Bash scripting.</li>
                                    <li>Implemented monitoring solutions with Nagios, Prometheus, and Grafana.</li>
                                    <li>Managed backups using Veeam Backup & Replication.</li>
                                    <li>Secured user access and integration with Keycloak (IAM).</li>
                                    <li>Deployed containerized applications using Docker.</li>
                                    <li>Maintained CI/CD pipelines with Jenkins, Git, and Terraform.</li>
                                </ul>
                            </div>

                            {/* ActioNet */}
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-lg font-bold text-gray-900">Linux System Administrator</h3>
                                    <span className="text-sm font-medium text-gray-500 italic">Aug 2019 – Aug 2023</span>
                                </div>
                                <div className="text-blue-600 font-medium mb-2">ActioNet – Virginia, USA (Remote)</div>
                                <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 text-sm">
                                    <li>Administered Linux servers (RedHat, CentOS, Ubuntu) on VMware and AWS.</li>
                                    <li>Reduced management time by 20% through Ansible automation.</li>
                                    <li>Monitored system performance via Zabbix and Nagios.</li>
                                    <li>Implemented centralized logging with ELK Stack (Elasticsearch, Logstash, Kibana).</li>
                                    <li>Configured and optimized LAMP servers, Apache, NGINX, and Varnish.</li>
                                    <li>Managed MySQL databases via PhpMyAdmin.</li>
                                    <li>Provided Level 2/3 incident support and maintained operational stability.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

                {/* --- Right Column (Sidebar) --- */}
                <div className="space-y-10">
                    
                    {/* Skills */}
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-blue-700 border-b border-gray-300 pb-2 mb-4">Technical Skills</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm mb-1">Cloud & Virtualization</h3>
                                <div className="flex flex-wrap gap-1">
                                    {['AWS', 'VMware', 'OpenShift', 'OpenStack'].map(s => (
                                        <span key={s} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">{s}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm mb-1">DevOps & Automation</h3>
                                <div className="flex flex-wrap gap-1">
                                    {['Docker', 'Kubernetes', 'Ansible', 'Jenkins', 'Terraform', 'GitLab CI', 'Bash'].map(s => (
                                        <span key={s} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800 text-sm mb-1">Monitoring & Security</h3>
                                <div className="flex flex-wrap gap-1">
                                    {['Prometheus', 'Grafana', 'Zabbix', 'ELK Stack', 'SSL/TLS', 'Firewall', 'VPN'].map(s => (
                                        <span key={s} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-blue-700 border-b border-gray-300 pb-2 mb-4">Certifications</h2>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-900">AWS Certified Solutions Architect – Associate</span>
                                <span className="text-xs text-gray-500">Amazon Web Services (AWS)</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-900">CompTIA Linux+</span>
                                <span className="text-xs text-gray-500">CompTIA</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-900">Linux System Administration</span>
                                <span className="text-xs text-gray-500">OpenClassrooms</span>
                            </li>
                        </ul>
                    </section>

                    {/* Languages */}
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-blue-700 border-b border-gray-300 pb-2 mb-4">Languages</h2>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex justify-between">
                                <span>French</span>
                                <span className="font-medium text-gray-900">Native</span>
                            </li>
                            <li className="flex justify-between">
                                <span>English</span>
                                <span className="font-medium text-gray-900">Professional</span>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-200 text-center flex items-center justify-center gap-4">
                 <button
                   onClick={() => window.print()}
                   className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors text-sm"
                 >
                    <Printer size={16} />
                    Print to PDF
                 </button>
                 <a
                   href="/Arnold_Kouevi_Admin_Linux.pdf"
                   download
                   className="inline-flex items-center gap-2 px-6 py-2 bg-gray-200 text-gray-900 font-semibold rounded hover:bg-gray-300 transition-colors text-sm"
                 >
                    <Download size={16} />
                    Download Existing PDF
                 </a>
            </div>
        </div>
    );
}
