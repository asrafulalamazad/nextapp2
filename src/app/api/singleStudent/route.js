// pages/api/students/[id]/index.js

import prisma from '../../../../lib/prisma';

export default async function handler(req, res) {
    const studentId = parseInt(req.query.id);

    if (req.method === 'GET') {
        const student = await prisma.student.findUnique({
            where: { id: studentId },
        });

        res.status(200).json(student);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
