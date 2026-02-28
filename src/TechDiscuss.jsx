import React from "react";

export default function TechDiscuss() {
    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased font-sans">
            <header className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between border-b">
                <a href="/" className="text-sm font-medium hover:underline text-blue-600">← Back to Portfolio</a>
                <h1 className="text-lg font-semibold">Tech Discuss</h1>
            </header>

            <main className="max-w-3xl mx-auto px-6 py-10 prose prose-gray">
                <article>
                    <h1 className="text-3xl font-bold mb-4">Case Study: Decoupling Microservices in a Ticket Booking Platform</h1>
                    <div className="mb-8 text-gray-600 space-y-1">
                        <p><strong>Project:</strong> ShowKarte</p>
                        <p><strong>Focus:</strong> System Design, Distributed Systems, Microservices Architecture, Caching (Redis)</p>
                    </div>

                    <section className="space-y-6 text-gray-800 leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">📌 Context</h2>
                            <p>
                                While building my ticket booking platform, ShowKarte, I encountered a classic system design challenge that turned into a valuable lesson in distributed systems architecture.
                            </p>
                            <p className="mt-2">
                                The requirement was simple: The Admin dashboard needed to display basic analytics, such as the total number of users registered on the platform.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">⚠️ The Problem: The "Distributed Monolith"</h2>
                            <p>
                                Initially, the solution looked straightforward. I set up a direct communication line between the Admin Service and the Auth Service.
                            </p>

                            <div className="bg-gray-50 p-4 rounded-md my-4 border border-gray-200 text-sm font-mono text-gray-700">
                                <strong>Initial Architecture Flow:</strong><br />
                                Admin Service → Feign Client → Auth Service → Database
                            </div>

                            <p>
                                Whenever an admin opened the dashboard, the Admin service called the Auth service, which queried the database and returned the count. Technically, this worked perfectly. But under the hood, there was a hidden issue.
                            </p>

                            <p className="mt-4 font-medium text-gray-900">The Admin dashboard now depended entirely on the Auth service. This meant:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-gray-700">
                                <li><strong>Cascading Latency:</strong> If Auth becomes slow, Admin becomes slow.</li>
                                <li><strong>Single Point of Failure:</strong> If Auth goes down, Admin breaks.</li>
                                <li><strong>Unnecessary Load:</strong> Every dashboard refresh triggered a network call.</li>
                            </ul>

                            <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 rounded-r-md font-medium">
                                What looked like microservices was actually tight coupling. I had accidentally built a distributed monolith.
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">💡 The Turning Point</h2>
                            <p>
                                Instead of immediately throwing new technology at the problem, I paused and asked a fundamental system design question:
                            </p>
                            <blockquote className="border-l-4 border-blue-500 pl-4 py-3 my-5 italic text-gray-700 bg-blue-50 rounded-r-md">
                                "Does this data really need to be strictly real-time?"
                            </blockquote>
                            <p>
                                User registrations don’t happen every millisecond. Even if the analytics number is slightly delayed (eventual consistency), the dashboard remains completely useful to the admin. Strict real-time consistency was unnecessary for this specific feature.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">🛠️ The Solution: Cache-Aside Pattern</h2>
                            <p>
                                By relaxing the consistency requirement, I was able to decouple the services. Instead of calling the Auth service on every single request, I introduced Redis caching using the Cache-Aside pattern.
                            </p>

                            <div className="bg-gray-50 p-4 rounded-md my-4 border border-gray-200 text-sm font-mono text-gray-700 break-words whitespace-pre-wrap">
                                <span className="font-semibold block mb-2">Updated Architecture Flow:</span>
                                Admin Service → Redis Cache<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘ (On Cache Miss) → Auth Service → Database
                            </div>

                            <p className="font-medium text-gray-900 mt-4">Now, when the Admin requests the user count, the service first checks Redis:</p>
                            <ul className="list-disc list-inside mt-2 space-y-2 ml-4 text-gray-700">
                                <li><strong>Cache Hit:</strong> Return the data immediately.</li>
                                <li><strong>Cache Miss:</strong> Fetch from the Auth service, return to the Admin, and store it in Redis with a Time-to-Live (TTL).</li>
                            </ul>
                        </div>
                    </section>
                </article>
            </main>

            <footer className="max-w-3xl mx-auto px-6 py-8 border-t mt-10">
                <p className="text-sm text-gray-500 text-center">© {new Date().getFullYear()} Kaviyarasu N. S</p>
            </footer>
        </div>
    );
}
