// pages/api/students/bulk-create.js

import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const students = req.body;

        const createdStudents = await prisma.student.createMany({
            data: students,
        });

        res.status(201).json(createdStudents);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
